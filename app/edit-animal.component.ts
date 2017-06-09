import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector:'edit-animal',
  template:`
  <div>
    <button class="btn btn-default" (click)="editButtonClicked(childAnimalToEdit)">Edit</button>

    <div *ngIf="showEditForm">
      <p>Edit Form for {{childAnimalToEdit.name}}</p>
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

}
