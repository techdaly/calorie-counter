import { Pipe, PipeTransform } from 'angular2/core';
import { Food } from './food.model';

@Pipe({
  name: "healthy",
  pure: false
})
export class HealthyPipe implements PipeTransform {
  transform(input: Food[], args) {

    var healthyFood = args[0];

    if(healthyFood === "healthy") {
      return input.filter((food) => {
        return food.isHealthy;
      });
    } else if (healthyFood === "notHealthy") {
      return input.filter((food) => {
        return !food.isHealthy;
      });
    } else {
      return input;
    }
  }
}
