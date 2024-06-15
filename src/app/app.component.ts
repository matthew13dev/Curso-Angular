import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = 'meu-primeiro-projeto-angular';
  userName: string="Joao";
  userData = {
    email: "aaaaaa@gemail.com",
    role: "admin"
  };


}
