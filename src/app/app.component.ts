import { Component } from '@angular/core';
import { user } from "./interfaces/user.interface";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'HelloWorld';
  // imagen = '../assets/img/img1.jpg'
  // items = [{name:'jonathan'}, {name:'eduardo'}];

  showText = false;
  addClass = false;

  Users: user[] =
  [
    {'id':1,'nombre':'jonathan', 'img':'../../assets/img/img1.jpg'},
    {'id':2,'nombre':'yisus', 'img':'../../assets/img/img2.jpg'},
    {'id':3,'nombre':'dan', 'img':'../../assets/img/img3.jpg'},
    {'id':4,'nombre':'gerardo', 'img':'../../assets/img/img4.jpg'}
  ]

  consolear(usuario: user) : void {
    console.log(usuario);
  }

  // onChangeImage(url: string) {
  //   this.imagen = url;
  // }

  constructor() {}
}
