import { Animal } from './../interfaces/Animal';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  remove(animals:Animal[], animal:Animal): Animal[] {

    let newList = animals.filter((animal_) => {
      return animal_ !== animal
    });

    return newList;
  }

  add(animals:Animal[], animal:Animal) {
  }
}
