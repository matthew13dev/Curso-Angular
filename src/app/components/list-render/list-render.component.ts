import { ListService } from './../../services/list.service';
import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/interfaces/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})


export class ListRenderComponent implements OnInit {

  private isActiveAnimal:boolean = false;
  private addAnimal:boolean = false;
  private animalDetails!:string;

  animals: Animal[] = [];



  constructor( private listService: ListService) {
    this.getAnimals();
  }

  ngOnInit(): void {
  }

  public showAnimals():void{
    this.isActiveAnimal = !this.getActiveAnimal();
    if(this.animalDetails){
      this.animalDetails = "";
    }
  }
  public getActiveAnimal():boolean{
    return this.isActiveAnimal;
  }

  public showAge(animal:Animal):void{
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos de vida! `;
  }

  public getAnimalDetails():string{
    return this.animalDetails;
  }



  public removeAnimal(animal:Animal):void{

    this.animalDetails = `O pet ${animal.name} foi deletado.`;

    let newList = this.animals.filter((animal_) => {
      return animal_ !== animal
    });

    this.animals = newList;
    this.listService.remove(animal.id).subscribe();
  }

  add(){
    this.addAnimal = !this.getAddAnimal();
  }
  getAddAnimal(){
    return this.addAnimal;
  }
  public confirmNewAnimal(animal:Animal):void{

    this.animalDetails = `O pet ${animal.name} foi adiocionado.`;
  }

  public getAnimals(){
    this.listService.getAll().subscribe((animals) => {
      return this.animals = animals
    });
  }
}
