import { Component } from '@angular/core';
import { Animal }      from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <div class="container">
    <button (click)="addNewAnimal()" class="btn btn-success">Add An Animal</button>
  </div>
  <div *ngIf="showAnimalForm">
    <form>
      <h3>Create a New Animal:</h3>
       <label>Species:</label>
       <input class="form-control" #newSpecies>
       <label>Name:</label>
       <input class="form-control" #newName>
       <label>Age:</label>
       <input class="form-control" #newAge>
       <label>Diet:</label>
       <input class="form-control" #newDiet>
       <label>Location:</label>
       <input class="form-control" #newLocation>
       <label>Number of Caretakers:</label>
       <input class="form-control" #newCaretakers>
       <label>Sex:</label>
       <input class="form-control" #newSex>
       <label>Likes:</label>
       <input class="form-control" #newLikes>
       <label>Dislikes:</label>
       <input class="form-control" #newDislikes>

       <button class="btn btn-default" (click)="submitForm(newDescription.value, newPriority.value); newDescription.value='';">Add</button>
    </form>
  </div>
  `
})

export class NewAnimalComponent  {
  showAnimalForm: Boolean = false;
  addNewAnimal () {
    this.showAnimalForm = true;
  }
}
