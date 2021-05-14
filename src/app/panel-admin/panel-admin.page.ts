import { Component, OnInit } from '@angular/core';
import { Encuesta } from '../interfaces/interfaces';

@Component({
  selector: 'app-panel-admin',
  templateUrl: './panel-admin.page.html',
  styleUrls: ['./panel-admin.page.scss'],
})
export class PanelAdminPage implements OnInit {

  segmentModel = 'encuestas';
  encuestas: Encuesta[];

  constructor() { }

  ngOnInit() {

  }

  printEncuesta(event) {
    console.log('PARENT');
    this.encuestas = event;
    console.log(this.encuestas);
  }

}
