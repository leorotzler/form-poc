import { Ingredient } from "./ingredient";

export interface CocktailProps {
  id: string;
  name: string;
  ingredients: Ingredient[];
}
