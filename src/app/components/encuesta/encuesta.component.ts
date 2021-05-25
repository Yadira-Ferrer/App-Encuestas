import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Encuesta, Opcion } from 'src/app/interfaces/interfaces';
import { Pregunta } from '../../interfaces/interfaces';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.scss'],
})
export class EncuestaComponent implements OnInit {

  encuesta: string = '';
  pregunta: string = '';
  opcion: string = '';
  i_opcion: Opcion[] = [];
  i_pregunta: Pregunta[] = [];
  @Input() i_encuesta: Encuesta[] = [];

  @Output() sendEncuesta = new EventEmitter();

  constructor( public toastController: ToastController ) { }

  ngOnInit() {}

  createSurvey() {
    this.i_encuesta.push({nombre: this.encuesta, preguntas:this.i_pregunta});
    this.sendEncuesta.emit(this.i_encuesta);
    this.i_pregunta = [];
    this.encuesta = '';
    this.presentToast('Encuesta creada exitosamente.','success')
  }

  addQuestion() {
    if ( this.pregunta !== '' ) {
      let opt = (this.i_opcion.length > 0) ? false : true;
      this.i_pregunta.push({pregunta: this.pregunta, directa:opt, respuesta:"", opciones: this.i_opcion});
      this.i_opcion = [];
      this.pregunta = '';
    } else {
      this.presentToast('No se puede añadir una pregunta en blanco.','warning')
    }
  }

  addOption() {
    if ( this.opcion !== '' ){
      this.i_opcion.push({opcion: this.opcion, estado:false});
      this.opcion = '';
    }
  }

  async presentToast(message,color) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color
    });
    toast.present();
  }
}
