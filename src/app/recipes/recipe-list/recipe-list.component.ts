import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output()
  recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Sweet', 'This is Sweet Recipe',
      'https://live.staticflickr.com/5496/31479301445_cb53c0f4e9_b.jpg', 'Carrot and Sugar'),
    new Recipe('Salad', 'This is Salad Recipe',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAF7rTiHiARQxR43t4ZvGHWRTehPbktXaMH81O_jTPNjAC0Q4dyg',
      'Fruits and Vegetables'),
    new Recipe('Tacos', 'This is Taco`s Recipe',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX-sPPeKL1kwB_Ieqr2gA2r9SrrB8NCgfxU7zGbamCzNgHJmw79A', 'Corn and chicken')
  ];


  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
