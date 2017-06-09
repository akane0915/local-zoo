import { Component, Input}  from '@angular/core';
import { Animal }       from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <ul>
      <li *ngFor="let animal of childAnimalList">{{animal.name}}</li>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
}
