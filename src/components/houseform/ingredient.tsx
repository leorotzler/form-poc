import { Input } from "@mantine/core";
import { Ingredient } from "../types/ingredient";
import { FieldArrayItem } from "houseform";

export interface IngredientFormProps extends Ingredient {
  index: number;
  cocktailIndex: number;
}

export const IngredientForm = ({
  index,
  cocktailIndex,
}: IngredientFormProps) => {
  console.log(name);
  return (
    <>
      <FieldArrayItem
        name={`cocktails[${cocktailIndex}].ingredients[${index}].name`}
      >
        {({ value, setValue, onBlur, errors }) => {
          return (
            <div>
              <h4>{value || "New Ingredient"}</h4>
              <Input mb={6} value={value} onChange={(e) => setValue(e.target.value)} placeholder="Ingredient" />
            </div>
          );
        }}
      </FieldArrayItem>
      <FieldArrayItem
        name={`cocktails[${cocktailIndex}].ingredients[${index}].amount`}
      >
        {({ value, setValue, onBlur, errors }) => {
          return (
            <div>
              <Input value={value} onChange={(e) => setValue(e.target.value)} placeholder="Amount" />
            </div>
          );
        }}
      </FieldArrayItem>
    </>
  );
};
