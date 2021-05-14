import { Component, Input, OnInit } from '@angular/core';
import { Usuario, Encuesta } from '../../interfaces/interfaces';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss'],
})
export class ClienteComponent implements OnInit {

  @Input() usuarios: Usuario[] = [];
  @Input() encuestas: Encuesta[] = [];

  encuesta_actual: Encuesta;
  enombre = '';

  constructor() { }

  ngOnInit() {}

  onclick(e) {
    this.encuesta_actual = e;
    this.enombre = this.encuesta_actual.nombre;
    console.log(this.encuesta_actual);
  }

}
