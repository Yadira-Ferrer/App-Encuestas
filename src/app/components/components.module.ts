import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { EncuestaComponent } from './encuesta/encuesta.component';
import { FormsModule } from '@angular/forms';
import { ListaEncuestaComponent } from './lista-encuesta/lista-encuesta.component';



@NgModule({
  declarations: [
    EncuestaComponent,
    ListaEncuestaComponent
  ],
  exports: [
    EncuestaComponent,
    ListaEncuestaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ]
})
export class ComponentsModule { }
