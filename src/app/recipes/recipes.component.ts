import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipeService} from "./recipe.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }
//notify me if recipeSelected event has been emitted. recipeSelected event emits Recipe, so getting recipe on subscribe()
  ngOnInit() {
    this.recipeService.recipeSelected
      .subscribe((recipe: Recipe) => {
        this.selectedRecipe = recipe;
      })
  }
}
