import {Component, EventEmitter} from 'angular2/core';
import {Food} from './food.model';

@Component({
  selector: 'new-food',
  outputs: ['onSubmitNewFood'],
  template: `
  <div class="food-form">
    <h2>Add a New Food</h2>
    <h3>Food:</h3>
    <input placeholder="pie a la mode" class="col-sm-8 input-lg" #newFoodName>
    <br>

    <h3>Details:</h3>
    <input placeholder="it was a very tiny pie" class="col-sm-8 input-lg" #newFoodDetails>
    <br>

    <h3>Calories:</h3>
    <input placeholder="25" class="col-sm-8 input-lg" #newFoodCalories>

    <button (click)="addFood(newFoodName, newFoodDetails, newFoodCalories)" class="btn-success btn-lg add-button">Add</button>
  </div>
  `
})
export class NewFoodComponent{
  public onSubmitNewFood: EventEmitter<Food>;
  constructor(){
    this.onSubmitNewFood = new EventEmitter();
  }
  addFood(foodName: HTMLInputElement,
          foodDetails: HTMLInputElement,
          foodCals: HTMLInputElement){
    this.onSubmitNewFood.emit({name: foodName.value,
                               details: foodDetails.value,
                               calories: parseInt(foodCals.value),
                               id: 0,
                               isHealthy: false});
    foodName.value = "";
    foodDetails.value = "";
    foodCals.value = "";

  }
}
