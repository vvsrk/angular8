import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  constructor() {
  }

  ingredientAdded = new EventEmitter<Ingredient>();

  private _ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Banana', 2)
  ];


  get ingredients(): Ingredient[] {
    return this._ingredients.slice();
  }

  addIngrediant(ingredient: Ingredient) {
    console.log("adding Ingredient::::"+ingredient);
    this._ingredients.push(ingredient);
  }
}
