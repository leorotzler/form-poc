import { Button, Grid, Input } from "@mantine/core";
import { CocktailProps } from "../types/cocktail";
import { Field, FieldArray, FieldArrayItem } from "houseform";
import { v4 as uuidv4 } from "uuid";
import { IngredientForm } from "./ingredient";

export interface CocktailFormProps extends CocktailProps {
  index: number;
  name: string;
}

const onNewIngredient = () => {
  // todo
};

export const CocktailForm = ({ index, name }: CocktailFormProps) => {
  return (
    <div>
      <h3>{name || "Unknown Cocktail"}</h3>
      <Grid>
        <Grid.Col span={6}>
          <FieldArrayItem name={`cocktails[${index}].name`}>
            {({ value, setValue, onBlur, errors }) => {
              return (
                <div>
                  <Input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                </div>
              );
            }}
          </FieldArrayItem>
        </Grid.Col>
        <Grid.Col span={6}>
          <FieldArray name={`cocktails[${index}].ingredients`}>
            {({ add: addIngredient, value: ingredientValue }) => (
              <>
                <Button
                  color="gray"
                  variant="outline"
                  onClick={() =>
                    addIngredient({
                      id: uuidv4(),
                      name: "",
                      amount: "",
                    })
                  }
                >
                  New Ingredient
                </Button>
                {ingredientValue.map((ingredient, ingredientIndex) => {
                  return (
                    <IngredientForm
                      index={ingredientIndex}
                      key={ingredient.id}
                      cocktailIndex={index}
                      {...ingredient}
                    />
                  );
                })}
              </>
            )}
          </FieldArray>
        </Grid.Col>
      </Grid>
    </div>
  );
};
