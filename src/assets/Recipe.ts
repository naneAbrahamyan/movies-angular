interface Ingredient {
    [key: string]: number;
  }

export interface Recipe {
    id: number;
    name:string;
    description: string;
    uri: string;
    ingredients:Ingredient
}