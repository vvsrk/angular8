import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Ingredient} from "../../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  ingredient : Ingredient;

  name: string;
  amount: number;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  addItem(name, amount) {
    console.log(name.value, amount.value);
    this.ingredient = new Ingredient(name.value, amount.value);
    this.shoppingListService.ingredientAdded.emit([this.ingredient]);

  }

}
