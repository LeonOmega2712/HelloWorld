import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { user } from '../interfaces/user.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() Usuario: user;
  @Output() regresoUser: EventEmitter<user> = new EventEmitter<user>();

  reciboUusario() {
    this.regresoUser.emit(this.Usuario);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
