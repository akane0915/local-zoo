import { Component } from '@angular/core';
import { Animal }      from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Welcome to the San Diego Zoo Animal Tracker!</h1>
    <animal-list [childAnimalList] = "masterAnimalList" (newAnimalSender) = "newAnimal($event)"></animal-list>
  </div>
  `
})

export class AppComponent {
  masterAnimalList: Animal[] = [
    new Animal(
      "Arctic Fox",
      "Moon",
      2,
      "Carnivore",
      "Northern Trail",
      5,
      "Female",
      "Cool shade",
      "Loud noises",
      "fox.jpeg"
    ),
    new Animal(
      "Ocelot",
      "Prince",
      4,
      "Carnivore",
      "Tropical Rain Forest Building",
      6,
      "Male",
      "Laying in the sunshine",
      "Toys that are not rope-based",
      "ocelot.jpeg"
    ),
    new Animal(
      "Northwest Black Tailed Deer",
      "Tinkerbell", 8,
      "Herbivore",
      "Northern Trail",
      2,
      "Female",
      "Delicate roots and leaves",
      "Loud Noises",
      "deer.jpeg"
    )
  ];

  newAnimal(newAnimal: Animal) {
    this.masterAnimalList.push(newAnimal);
  }
}
