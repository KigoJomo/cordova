// components/RadioOption.tsx
'use client';

import { UseFormRegister } from 'react-hook-form';

interface RadioOptionProps {
  value: string;
  label: string;
  register: UseFormRegister<any>;
  name: string;
}

export const RadioOption = ({ value, label, register, name }: RadioOptionProps) => (
  <label className="flex items-center gap-2">
    <input
      type="radio"
      value={value}
      {...register(name)}
      className="accent-black"
    />
    {label}
  </label>
);