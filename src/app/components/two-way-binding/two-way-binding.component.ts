import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

  name:string = "";
  private password:string = '12345';
  action:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public send():void{
    this.action = true;
  }

}
