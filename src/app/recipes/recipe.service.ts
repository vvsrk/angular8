import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from "./recipe.model";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  private _recipes: Recipe[] = [
    new Recipe('Pizza', 'Italian chicken Pizza',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTKhFp3GZ77L5vtNGbUBEBdb8EyPF324TB1M0_lYzG3xhYf1tP&s', 'Chicken, cheese, red pepper, olives and pizza crust'),
    new Recipe('Salad', 'Mixed Veg and Fruit Salad',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAF7rTiHiARQxR43t4ZvGHWRTehPbktXaMH81O_jTPNjAC0Q4dyg',
      'Sunflower seeds, gapes, red bell pepper, romaine lettuce, broccoli, bean sprouts, onions and spinach'),
    new Recipe('Tacos', 'Taco`s Recipe',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX-sPPeKL1kwB_Ieqr2gA2r9SrrB8NCgfxU7zGbamCzNgHJmw79A', 'Taco shells, Tomato soup, sour cream, pinto beans and chicken')
  ];


  get recipes(): Recipe[] {
    return this._recipes.slice();
  }
}
