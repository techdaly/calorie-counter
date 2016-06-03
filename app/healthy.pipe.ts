import {Pipe, PipeTransform} from 'angular2/core';
import {Food} from './food.model';

@Pipe({
  name: "healthy",
  pure: false
})
export class DonePipe implements PipeTransform {
  transform(input: Food[], args) {
    var desiredDoneState = args[0];
    if(desiredDoneState === "done") {
      return input.filter(function(task) {
        return task.done;
      });
    } else if (desiredDoneState === "notDone") {
      return input.filter(function(task) {
        return !task.done;
      });
    } else {
      return input;
    }
  }
}
