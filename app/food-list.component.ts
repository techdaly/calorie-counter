import { Component, EventEmitter } from 'angular2/core';
import { FoodComponent } from './food.component';
import { Food } from './food.model';
import { EditFoodDetailsComponent } from './edit-food-details.component';
import { NewFoodComponent } from './new-food.component';

import { HealthyPipe } from './healthy.pipe';

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  outputs: ['onFoodSelect'],
  directives: [FoodComponent, EditFoodDetailsComponent, NewFoodComponent],
  pipes: [HealthyPipe],
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="all">All</option>
    <option value="healthy">Healthy</option>
    <option value="notHealthy">Unhealthy</option>
  </select>
  <food-display *ngFor="#currentFood of foodList | healthy:filterHealthy" (click)="foodClicked(currentFood)" [class.selected]="currentFood === selectedFood" [food]="currentFood">
    {{ currentFood.name}}, {{currentFood.details}}, {{ currentFood.calories}}
  </food-display>
  <edit-food-details *ngIf="selectedFood" [food]="selectedFood">
  </edit-food-details>
  <br>
  <new-food (onSubmitNewFood)="createFood($event)"></new-food>
  `
})
export class FoodListComponent {
  public foodList: Food[];
  public onFoodSelect: EventEmitter<Food>;
  public filterHealthy: string="all";
  public selectedFood: Food;

  constructor() {
   this.onFoodSelect = new EventEmitter();
  }
  foodClicked(clickedFood: Food): void {
    console.log('child', clickedFood);
    this.selectedFood = clickedFood;
    this.onFoodSelect.emit(clickedFood);
  }
  createFood(newFood: Food): void {
    newFood.id = this.foodList.length;
    this.foodList.push(newFood);

  }
  onChange(filterOption) {
    this.filterHealthy = filterOption;
    console.log(this.filterHealthy);
  }
}
