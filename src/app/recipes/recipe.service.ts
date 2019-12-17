import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from "./recipe.model";
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService) { }

  private _recipes: Recipe[] = [
    new Recipe('Pizza', 'Italian chicken Pizza',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTKhFp3GZ77L5vtNGbUBEBdb8EyPF324TB1M0_lYzG3xhYf1tP&s',
      [
                  new Ingredient('Chicken', 1),
                  new Ingredient('cheese', 3),
                  new Ingredient('red pepper', 4),
                  new Ingredient('olives', 8)
              ]),
    new Recipe('Salad', 'Mixed Veg and Fruit Salad',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAF7rTiHiARQxR43t4ZvGHWRTehPbktXaMH81O_jTPNjAC0Q4dyg',
      [
                  new Ingredient('Sunflower seeds', 20),
                  new Ingredient('romaine lettuce', 4),
                  new Ingredient('broccoli', 5),
                  new Ingredient('sprouts', 1)
              ]),
    new Recipe('Tacos', 'Taco`s Recipe',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX-sPPeKL1kwB_Ieqr2gA2r9SrrB8NCgfxU7zGbamCzNgHJmw79A',
      [
                  new Ingredient('Taco shells', 1),
                  new Ingredient('Tomato soup', 1),
                  new Ingredient('pinto beans', 4),
                  new Ingredient('chicken', 1)
              ])
  ];


  get recipes(): Recipe[] {
    return this._recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}
