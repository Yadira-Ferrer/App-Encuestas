import { Component, OnInit } from '@angular/core';
import { Encuesta, Usuario } from '../interfaces/interfaces';

@Component({
  selector: 'app-panel-admin',
  templateUrl: './panel-admin.page.html',
  styleUrls: ['./panel-admin.page.scss'],
})
export class PanelAdminPage implements OnInit {

  segmentModel = 'encuestas';
  encuestas: Encuesta[] = [];
  usuarios: Usuario[] = [];

  constructor() { }

  ngOnInit() {

  }

  printEncuesta(event) {
    this.encuestas = event;
    console.log(this.encuestas);
  }

  printUsuarios(event) {
    this.usuarios = event;
    console.log(this.usuarios);
  }

}
