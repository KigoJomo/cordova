// components/InputField.tsx
'use client';

import { InputHTMLAttributes, forwardRef } from 'react';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: { message?: string };
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, error, className, ...props }, ref) => (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label className="text-xs opacity-75 hidden">{label}</label>
      <input
        ref={ref}
        {...props}
        className={`w-full px-2 pb-2 border-b focus:border-foreground outline-none focus:outline-none ${
          error ? 'border-red-500' : 'border-gray-200'
        } transition-all duration-300`}
      />
      {error && <span className="text-red-500 text-sm">{error.message}</span>}
    </div>
  )
);

InputField.displayName = 'InputField';

export default InputField;