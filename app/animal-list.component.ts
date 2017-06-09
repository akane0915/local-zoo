import { Component, Input, Output, EventEmitter}  from "@angular/core";
import { Animal }       from "./animal.model";

@Component({
  selector: "animal-list",
  template: `
  <div class="row">
    <div class="col-md-6">
      <h3>Click on an animal to see its details.</h3>

      <p><span class="filter-label">Filter Animals By Age:</span>
        <select (change)="ageFilterSelection($event.target.value)">
          <option value="allAnimals" selected="selected">All Animals</option>
          <option value="youngAnimals">Under Age 2</option>
            <option value="matureAnimals">Over Age 2</option>
        </select>
      </p>

      <ul class="animal-list">
          <li *ngFor="let animal of childAnimalList | ageFilter:filterByAge">
            <a (click)="showDetails(animal)">{{animal.name}}</a>, the {{animal.species}}
          </li>
      </ul>

      <new-animal (newAnimalSender) = "newAnimalToAdd($event)"></new-animal>
    </div>

    <div *ngIf="animalToBeShown" class="col-md-6 well">
      <div class="row">
          <div  class="animal-details ">
            <h3>{{animalToBeShown.name}}</h3>
            <div class="col-md-6">
              <p>Species: {{animalToBeShown.species}}</p>
              <p>Age: {{animalToBeShown.age}}</p>
              <p>Diet: {{animalToBeShown.diet}}</p>
              <p>Location in Zoo: {{animalToBeShown.location}}</p>
              <p>Caretakers: {{animalToBeShown.caretakers}}</p>
              <p>Sex: {{animalToBeShown.sex}}</p>
              <p>Likes: {{animalToBeShown.likes}}</p>
              <p>Dislikes: {{animalToBeShown.dislikes}}</p>
          </div>

          <div class="col-md-6">
            <img class="animal-picture" src="./../resources/images/{{animalToBeShown.image}}" alt="Animal Image"/>
          </div>
        </div>
      </div>

      <edit-animal [childAnimalToEdit]="animalToBeShown"></edit-animal>

    </div>
  </div>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() newAnimalSender = new EventEmitter();
  animalToBeShown: Animal = null;
  filterByAge: string = null;

  showDetails(animal: Animal) {
    this.animalToBeShown = animal;
  }

  newAnimalToAdd(animal) {
    this.newAnimalSender.emit(animal);
  }

  ageFilterSelection(selectionFromMenu) {
    this.filterByAge = selectionFromMenu;
  }

}
