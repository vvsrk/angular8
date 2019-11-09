import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Ingredient} from "../../../shared/ingredient.model";
import {Recipe} from "../../recipes/recipe.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  ingredient : Ingredient;

  @Output()
  ingredientWasAdded = new EventEmitter<Ingredient>();



  name: string;
  amount: number;

  constructor() { }

  ngOnInit() {
  }

  addItem(name, amount) {
    console.log(name.value, amount.value);
    this.ingredient = new Ingredient(name.value, amount.value);
    this.ingredientWasAdded.emit(this.ingredient);
  }

}
