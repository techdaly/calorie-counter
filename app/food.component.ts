import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
    selector: 'food-display',
    inputs: ['food'],
  template: `
    <h3>{{ food.name }}</h3>
    <h4>{{ food.details }}</h4>
    <h4>{{ food.calories }} calories</h4>
    <br>
  `
})
export class FoodComponent {
  public food: Food;
}
