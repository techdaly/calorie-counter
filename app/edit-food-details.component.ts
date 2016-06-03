import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food-details',
  inputs: ['food'],
  template: `
    <div id="edit-div" class="task-form">
      <h4>Edit Food: </h4>
      <input [(ngModel)]="food.name" class="col-sm-8 input-lg task-form"/>
      <h4>Edit Details: </h4>
      <input [(ngModel)]="food.details" class="col-sm-8 input-lg task-form"/>
      <h4>Edit Calories: </h4>
      <input [(ngModel)]="food.calories" class="col-sm-8 input-lg task-form"/>
    </div>
  `
})
export class EditFoodDetailsComponent {
  public food; Food;
}
