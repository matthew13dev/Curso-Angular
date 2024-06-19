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

  animals: Animal[] = [
    {name:"Roberto", type: "Dog", age: 3},
    {name:"Silvia", type: "Cat", age: 5},
    {name:"Carlos", type: "Bird", age: 7},
    {name:"Edna", type: "Horse", age: 9},
  ]

  constructor( private listService: ListService) { }

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

    let newList: Animal[] = this.listService.remove(this.animals, animal);
    this.animals = newList;
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
}
