import { Pipe, PipeTransform } from '@angular/core';
import { Animal }      from './animal.model';

@Pipe({
  name: 'ageFilter',
  pure: false
})

export class AgeFilter implements PipeTransform {
  transform(input: Animal[], desiredAgeFilter) {
    let output: Animal[] = [];
    if (desiredAgeFilter == "youngAnimals") {
      for(let animal of input) {
        if(animal.age < 2) {
          output.push(animal);
        }
      }
      return output;
    } else if(desiredAgeFilter == "matureAnimals") {
      for(let animal of input) {
        if(animal.age > 2) {
          output.push(animal);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
