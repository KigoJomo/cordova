// components/RadioOption.tsx
'use client';

import { UseFormRegister, FieldValues, Path } from 'react-hook-form';

interface RadioOptionProps<T extends FieldValues> {
  value: string;
  label: string;
  register: UseFormRegister<T>;
  name: Path <T>;
}

export const RadioOption = <T extends FieldValues>({ value, label, register, name }: RadioOptionProps<T>) => (
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