import {
  Controller,
  UseControllerProps,
  type FieldValues,
  type Path,
} from "react-hook-form";
import { Input, type InputProps } from "@mantine/core";
import { PropsWithForwardedRef } from "../../types";

export interface RHFInputProps extends InputProps {
  placeholder?: string;
}

export const RHFInput = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>
>({
  name,
  control,
  defaultValue,
  placeholder,
  rules,
}: PropsWithForwardedRef<
  HTMLInputElement,
  RHFInputProps & UseControllerProps<TFieldValues, TName>
>) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field }) => <Input {...field} placeholder={placeholder} />}
    />
  );
};
