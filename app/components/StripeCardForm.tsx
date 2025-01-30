// components/StripeCardForm.tsx
'use client';

import { CardElement } from '@stripe/react-stripe-js';
import CtaButton from './CtaButton';

export const StripeCardForm = ({ disabled }: { disabled: boolean }) => {
  return (
    <div className="space-y-4">
      <div className="p-4 border rounded-lg">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#1a1a1a',
                '::placeholder': {
                  color: '#a0a0a0',
                },
              },
            },
          }}
        />
      </div>
      <CtaButton
        label={disabled ? "Processing..." : "Pay with Card"}
        dark
        className="w-full md:w-full"
        type="submit"
        disabled={disabled}
      />
    </div>
  );
};