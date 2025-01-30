// app/checkout/CheckoutWrapper.tsx
'use client';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function CheckoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Elements stripe={stripePromise} options={{ locale: 'en' }}>
      {children}
    </Elements>
  );
}