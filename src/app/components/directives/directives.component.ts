import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  size = '20px'
  font = 'Arial'
  color = 'red'
  padding = '30px 0px'

  classes = ['green-title','small-title']
  under = 'under'

  constructor() { }

  ngOnInit(): void {
  }

}
