import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../../recipe.model';

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

  /*
  listen to this event from outside component. i.e, recipe-list
   */
  @Output()
  recipeSelected = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  displaySelectedRecipe() {
    console.log('displayselectedrecipe...');
    this.recipeSelected.emit();
  }

}
