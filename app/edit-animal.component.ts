import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector:'edit-animal',
  template:`
  <div>
    <button class="btn btn-default" (click)="editButtonClicked(childAnimalToEdit)">Edit</button>

    <div class="edit-form">
      <div *ngIf="showEditForm">
        <hr>
        <h4>Edit Form for {{childAnimalToEdit.name}}</h4>

        <label>Species:</label>
        <input class="form-control" class="form-control" [(ngModel)]="childAnimalToEdit.species">

        <label>Name:</label>
        <input class="form-control" [(ngModel)]="childAnimalToEdit.name">

        <label>Age:</label>
        <input class="form-control" [(ngModel)]="childAnimalToEdit.age">

        <label>Diet:</label>
        <input class="form-control" [(ngModel)]="childAnimalToEdit.diet">

        <label>Location:</label>
        <input class="form-control" [(ngModel)]="childAnimalToEdit.location">

        <label>Number of Caretakers:</label>
        <input class="form-control" [(ngModel)]="childAnimalToEdit.caretakers">

        <label>Sex:</label>
        <input class="form-control" [(ngModel)]="childAnimalToEdit.sex">

        <label>Likes:</label>
        <input class="form-control" [(ngModel)]="childAnimalToEdit.likes">

        <label>Dislikes:</label>
        <input class="form-control" [(ngModel)]="childAnimalToEdit.dislikes">
        <br>

        <button class="btn btn-success" (click)="finshedEditing()">Done</button>
      </div>
    </div>
  </div>
  `
})

export class EditAnimalComponent {
  @Input() childAnimalToEdit: Animal;

  showEditForm: Boolean = false;

  editButtonClicked(animalToEdit) {
    this.showEditForm = true;
  }

  finshedEditing() {
    this.showEditForm = false;
  }

}
