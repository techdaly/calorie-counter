import { Component, EventEmitter } from 'angular2/core';

@Component({
    selector: 'food-display',
    inputs: ['food'],
  template: `
    <div>
      <h3>{{ currentFood.name }}</h3>
      <h4>{{ currentFood.details }}</h4>
      <h4>{{ currentFood.calories }} calories</h4>
    </div>
  `
})
export class FoodComponent {
  public food: Food;
}

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  outputs: ['onFoodSelect'],
  directives: [FoodComponent],
  template: `
  <food-display *ngFor="#currentFood of foodList" (click)="foodClicked(currentFood)"
  [class.selected]="currentFood === selectedFood"
  [food]="currentFood">
  </food-display>
  `
})
export class FoodListComponent {
  public foodList: Food[];
  public onFoodSelect: EventEmitter<Food>;
  public selectedFood: Food;
  constructor() {
   this.onFoodSelect = new EventEmitter();
  }
  foodClicked(clickedFood: Food): void {
    console.log('child', clickedFood);
    this.selectedFood = clickedFood;
    this.onFoodSelect.emit(clickedFood);
  }
}

@Component({
  selector: 'my-app',
  directives: [FoodListComponent],
  template: `
    <div class="container">
      <h1>Calorie Counter</h1>
      <food-list
      [foodList]="foods"
      (onFoodSelect="foodWasSelected($event)")>
      </food-list>
    </div>
  `
})
export class AppComponent {
  public foods: Food[];
  constructor(){
    this.foods = [
      new Food("Strawberry Cream Pie", "Yum, pie for breakfast!", 405, 0),
      new Food("8 oz Coffee", "Cream, no sugar", 58, 1),
      new Food("Grilled Cheese Sandwich", "Cheddar on wheat", 350, 2),
      new Food("Tomato Soup", "Cup, very delicious, little cheese on top", 280, 3)
    ];
  }
  foodWasSelected(clickedFood: Food): void{
    console.log(clickedFood);
  }
}
export class Food {
  constructor(public name: string, public details: string, public calories: number, public id: number){

  }
}
