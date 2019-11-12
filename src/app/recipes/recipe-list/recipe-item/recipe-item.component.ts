import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../recipe.model';
import {RecipeService} from "../../recipe.service";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  /*
  To access data from Outside, we use decorator i.e, @Input. In this case, it gets recipe data from recipe-list component (parent)
   */
  @Input()
  recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  displaySelectedRecipe() {
    console.log('displayselectedrecipe...');
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
