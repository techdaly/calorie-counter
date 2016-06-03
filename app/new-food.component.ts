import {Component, EventEmitter} from 'angular2/core';
import {Food} from './food.model';

@Component({
  selector: 'new-food',
  outputs: ['onSubmitNewFood'],
  template: `
  <div class="food-form">
    <h3>Food:</h3>
    <input placeholder="pie a la mode" class="col-sm-8 input-lg" #newFoodName>
    <h3>Details:</h3>
    <input placeholder="it was a very tiny pie" class="col-sm-8 input-lg" #newFoodDetails>
    <h3>Calories:</h3>
    <input placeholder="25" class="col-sm-8 input-lg" #newFoodCalories>
    <button (click)="addFood(newFoodName, newFoodDetails, newFoodCalories)" class="btn-success btn-lg add-button">Add</button>
  </div>
  `
})
export class NewFoodComponent{
  public onSubmitNewFood: EventEmitter<String>;
  constructor(){
    this.onSubmitNewFood = new EventEmitter();
  }
  addFood(userFood: HTMLInputElement){
    this.onSubmitNewFood.emit(userFood.value);
    userFood.value = "";
  }
}
