// app/checkout/page.tsx
import CheckoutForm from '../components/CheckoutForm';
import CheckoutWrapper from '../components/CheckoutWrapper';

const CheckoutPage = () => {
  return (
    <CheckoutWrapper>
      <CheckoutForm />
    </CheckoutWrapper>
  );
};

export default CheckoutPage;