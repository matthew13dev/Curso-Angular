import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})


export class ListRenderComponent implements OnInit {

  private isActive:boolean = false;

  animals = [
    {name:"Roberto", type: "Dog"},
    {name:"Silvia", type: "Cat"},
    {name:"Carlos", type: "Bird"},
    {name:"Edna", type: "Horse"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  public showAnimals():void{
    this.isActive = !this.getActive();
  }

  public getActive():boolean{
    return this.isActive;
  }
}
