import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { EncuestaComponent } from './encuesta/encuesta.component';
import { FormsModule } from '@angular/forms';
import { ListaEncuestaComponent } from './lista-encuesta/lista-encuesta.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ClienteRegistroComponent } from './cliente-registro/cliente-registro.component';



@NgModule({
  declarations: [
    EncuestaComponent,
    ListaEncuestaComponent,
    ClienteComponent,
    ClienteRegistroComponent
  ],
  exports: [
    EncuestaComponent,
    ListaEncuestaComponent,
    ClienteComponent,
    ClienteRegistroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ]
})
export class ComponentsModule { }
