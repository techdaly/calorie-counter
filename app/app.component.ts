import { Component } from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>Calorie Counter</h1>
      <div *ngFor="#food of foods" (click)="foodWasSelected(food)">
        <h3>{{ food.name }}</h3>
        <h4>{{ food.details }}</h4>
        <h4>{{ food.calories }} calories</h4>
      </div>
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
