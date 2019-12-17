import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';
import {Ingredient} from "../../../shared/ingredient.model";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input()
  recipe: Recipe;


  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }
  displayItemDetails(recipeItem: object) {
    console.log('display Item details');
  }

  addItemsToShoppingList(ingredients: Ingredient[]) {
    console.log('Items added to shopping list>>>'+this.recipe.ingredients);
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
