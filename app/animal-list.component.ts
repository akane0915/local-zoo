import { Component, Input, Output, EventEmitter}  from "@angular/core";
import { Animal }       from "./animal.model";

@Component({
  selector: "animal-list",
  template: `
  <div class="row">
    <div class="col-md-6">
      <h3>Click on an animal to see its details.</h3><br>

      <p><span class="filter-label">Filter Animals By Age:</span>
        <select (change)="ageFilterSelection($event.target.value)">
          <option value="allAnimals" selected="selected">All Animals</option>
          <option value="youngAnimals">Under Age 2</option>
            <option value="matureAnimals">Over Age 2</option>
        </select>
      </p><br>

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
              <p><span class="animal-property-heading">Species:</span> {{animalToBeShown.species}}</p>
              <p><span class="animal-property-heading" >Age:</span> {{animalToBeShown.age}}</p>
              <p><span class="animal-property-heading" >Diet:</span> {{animalToBeShown.diet}}</p>
              <p><span class="animal-property-heading" >Location in Zoo:</span> {{animalToBeShown.location}}</p>
              <p><span class="animal-property-heading" >Caretakers:</span> {{animalToBeShown.caretakers}}</p>
              <p><span class="animal-property-heading" >Sex:</span> {{animalToBeShown.sex}}</p>
              <p><span class="animal-property-heading" >Likes:</span> {{animalToBeShown.likes}}</p>
              <p><span class="animal-property-heading" >Dislikes:</span> {{animalToBeShown.dislikes}}</p>
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
