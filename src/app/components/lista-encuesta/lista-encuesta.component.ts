import { Component, Input, OnInit } from '@angular/core';
import { Encuesta } from '../../interfaces/interfaces';

@Component({
  selector: 'app-lista-encuesta',
  templateUrl: './lista-encuesta.component.html',
  styleUrls: ['./lista-encuesta.component.scss'],
})
export class ListaEncuestaComponent implements OnInit {

  @Input() encuestas: Encuesta[];

  constructor() { }

  ngOnInit() {}

}
