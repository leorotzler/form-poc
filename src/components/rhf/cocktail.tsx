import { Control, useFieldArray } from "react-hook-form";
import { RHFInput } from "./input";
import { IngredientForm } from "./ingredient";
import { Button, Grid } from "@mantine/core";
import { v4 as uuidv4 } from "uuid";
import { CocktailProps } from "../types/cocktail";
import { Ingredient } from "../types/ingredient";

export interface CocktailFormProps extends CocktailProps {
  control: Control<any>;
  index?: number;
}

export const CocktailForm = ({ name, control, index }: CocktailFormProps) => {
  const {
    fields: ingredientFields,
    append,
    prepend,
    remove,
    swap,
    move,
    insert,
  } = useFieldArray({
    control,
    name: `cocktails.${index}.ingredients`,
  });

  const onNewIngredient = () => {
    const emptyIngredient = {
      id: uuidv4(),
      name: "",
      amount: "",
    };
    append(emptyIngredient);
  };

  return (
    <div>
      <h3>{name || "Unknown Cocktail"}</h3>
      <Grid>
        <Grid.Col span={6}>
          <RHFInput
            control={control}
            name={`cocktails.${index}.name`}
            placeholder="Cocktail name"
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <Button color="gray" variant="outline" onClick={onNewIngredient}>
            New Ingredient
          </Button>
          {ingredientFields.map((field, index) => {
            const ingredient = field as Ingredient & Record<"id", string>;

            return (
              <IngredientForm
                key={ingredient.id}
                index={index}
                {...ingredient}
                control={control}
              />
            );
          })}
        </Grid.Col>
      </Grid>
    </div>
  );
};
