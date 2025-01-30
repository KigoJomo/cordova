// components/MpesaForm.tsx
'use client';

import CtaButton from './CtaButton';
import InputField from './InputField';

export const MpesaForm = ({ disabled }: { disabled: boolean }) => {
  return (
    <div className="space-y-4">
      <InputField
        label="MPESA Phone Number"
        type="tel"
        name="phone"
        placeholder="MPESA Phone Number - 07XX XXX XXX"
        pattern="[0-9]{10}"
        required
      />
      
      <CtaButton
        label="Pay with M-Pesa"
        dark
        className="w-full md:w-full"
        type="submit"
        disabled={disabled}
      />
    </div>
  );
};