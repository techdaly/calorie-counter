import { Component, EventEmitter } from 'angular2/core';
import { FoodListComponent } from './food-list.component';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  directives: [FoodListComponent],
  template: `
    <div class="container">
      <h1>Calorie Counter</h1>
      <food-list
        [foodList]="foods"
        (onFoodSelect)="foodWasSelected($event)">
      </food-list>
    </div>
  `
})
export class AppComponent {
  public foods: Food[];
  constructor(){
    this.foods = [
      new Food("Strawberry Cream Pie", "Yum, pie for breakfast!", 525, 0),
      new Food("8 oz Coffee", "Cream, no sugar", 58, 1),
      new Food("Grilled Cheese Sandwich", "Cheddar on wheat", 350, 2),
      new Food("Tomato Soup", "Cup, very delicious, little cheese on top", 280, 3)
    ];
  }
  foodWasSelected(clickedFood: Food): void{
    console.log("parent", clickedFood);
  }
}
