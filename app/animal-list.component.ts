import { Component, Input}  from "@angular/core";
import { Animal }       from "./animal.model";

@Component({
  selector: "animal-list",
  template: `
  <div class="row">
    <div class="col-md-6">
      <h3>Click on an animal to see its details.</h3>
      <ul class="animal-list">
          <li *ngFor="let animal of childAnimalList">
            <a (click)="showDetails(animal)">{{animal.name}}</a>, the {{animal.species}}
          </li>
      </ul>

      <new-animal></new-animal>
    </div>

    <div class="col-md-6">
      <div class="row">
          <div *ngIf="animalToBeShown" class="animal-details well">
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
            <img class="animal-picture" src="./../resources/images/fox.jpeg" alt="Tiger Image"/>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  animalToBeShown: Animal = null;

  showDetails(animal: Animal) {
    this.animalToBeShown = animal;
  }
}
