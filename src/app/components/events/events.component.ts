import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  private show:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public showMensage():void{
   this.show = !this.getShow();
  }


  public getShow():boolean {
    return this.show;
  }

}
