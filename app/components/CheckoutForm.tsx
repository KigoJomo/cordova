// app/checkout/CheckoutForm.tsx
'use client';
import { useShop } from '@/context/ShopContext';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { StripeCardForm } from './StripeCardForm';
import { OrderSummary } from './OrderSummary';
import InputField from './InputField';
import { RadioOption } from './RadioOption';
import { MpesaForm } from './MpesaForm';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CtaButton from './CtaButton';

// Add type for API response
type PaymentIntentResponse = {
  clientSecret?: string;
  error?: string;
};

const formSchema = z.object({
  email: z.string().email(),
  phone: z.string().regex(/^07\d{8}$/, 'Invalid Kenyan phone number'),
  address: z.object({
    line1: z.string().min(1),
    city: z.string().min(1),
    postal_code: z.string().optional(),
  }),
  paymentMethod: z.enum(['mpesa', 'card']),
});

type FormValues = z.infer<typeof formSchema>;

const CheckoutForm = () => {
  const { cart, clearCart } = useShop();
  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();
  const [paymentProcessing, setPaymentProcessing] = useState(false);

  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { paymentMethod: 'mpesa' },
  });

  const selectedPaymentMethod = watch('paymentMethod');

  const processOrder = async (data: FormValues) => {
    setPaymentProcessing(true);
    
    try {
      if (data.paymentMethod === 'card') {
        if (!stripe || !elements) {
          throw new Error('Payment system not ready');
        }

        // Create payment intent
        const response = await fetch('/api/create-payment-intent', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            amount: cart.reduce((sum, item) => sum + item.price * item.quantity, 0) * 100
          }),
        });

        if (!response.ok) throw new Error('Payment initialization failed');
        
        const result: PaymentIntentResponse = await response.json();
        if (!result.clientSecret) throw new Error(result.error || 'Payment failed');

        // Confirm payment
        const { error } = await stripe.confirmCardPayment(result.clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement)!,
            billing_details: {
              email: data.email,
              address: {
                line1: data.address.line1,
                city: data.address.city,
                postal_code: data.address.postal_code
              }
            }
          }
        });

        if (error) throw error;
      } else {
        // M-Pesa implementation
        const response = await fetch('/api/mpesa-payment', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            phone: data.phone,
            amount: cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
          }),
        });

        if (!response.ok) throw new Error('M-Pesa payment failed');
      }

      clearCart();
      router.push('/checkout/success');
    } catch (error) {
      console.error('Payment Error:', error);
      alert(`Payment failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setPaymentProcessing(false);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h4 className="capitalize text-lg font-semibold">Your cart is empty</h4>
        <CtaButton
          label="Continue Shopping"
          onClick={() => router.push('/products')}
        />
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 md:p-8">
      <form
        onSubmit={handleSubmit(processOrder)}
        className="grid md:grid-cols-2 gap-8">
        {/* Left Column - Order Summary */}
        <OrderSummary cart={cart} />

        {/* Right Column - Customer Info + Payment */}
        <div className="space-y-8">
          {/* Customer Information */}
          <div className="space-y-6">
            <h4 className="capitalize text-lg font-semibold">
              Customer Information
            </h4>

            <InputField
              label="Email"
              {...register('email')}
              placeholder="Email"
              error={errors.email}
            />

            <InputField
              label="Shipping Address"
              {...register('address.line1')}
              placeholder="Shipping address"
              error={errors.address?.line1}
            />

            <div className="grid grid-cols-2 gap-4">
              <InputField
                label="City"
                {...register('address.city')}
                placeholder="City"
                error={errors.address?.city}
              />

              <InputField
                label="Postal Code (optional)"
                {...register('address.postal_code')}
                placeholder="Postal Code"
              />
            </div>
          </div>

          {/* Payment Section */}
          <div className="space-y-6">
            <h4 className="capitalize text-lg font-semibold">
              Payment Details
            </h4>

            <div className="space-y-8">
              <div className="flex flex-col gap-4">
                <RadioOption
                  value="mpesa"
                  label="M-Pesa Mobile Money"
                  register={register}
                  name="paymentMethod"
                />
                <RadioOption
                  value="card"
                  label="Credit/Debit Card"
                  register={register}
                  name="paymentMethod"
                />
              </div>

              {selectedPaymentMethod === 'mpesa' ? (
                <MpesaForm disabled={paymentProcessing} />
              ) : (
                <StripeCardForm disabled={paymentProcessing} />
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;