import { Control } from "react-hook-form";
import { RHFInput } from "./input";
import { Ingredient } from "../types/ingredient";

export interface IngredientFormProps extends Ingredient {
  control: Control<any>;
  index?: number;
}

export const IngredientForm = ({ control, index }: IngredientFormProps) => {
  return (
    <div>
      <h2>ingredient</h2>
      <RHFInput
        control={control}
        name={`cocktails.${index}.ingredients.${index}.name`}
        placeholder="Ingredient"
      />
      <RHFInput
        control={control}
        name={`cocktails.${index}.ingredients.${index}.amount`}
        placeholder="Amount"
      />
    </div>
  );
};
