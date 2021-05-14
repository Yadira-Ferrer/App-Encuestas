import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Usuario } from '../../interfaces/interfaces';

@Component({
  selector: 'app-cliente-registro',
  templateUrl: './cliente-registro.component.html',
  styleUrls: ['./cliente-registro.component.scss'],
})
export class ClienteRegistroComponent implements OnInit {

  usuario: string = '';
  correo: string = '';
  @Input() i_usuario: Usuario[] = [];

  @Output() sendUsuarios = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  createUser() {
    if ( this.usuario !== '' && this.correo !== '') {
      this.i_usuario.push({nombre:this.usuario,correo:this.correo});
      this.usuario = '';
      this.correo = '';

      this.sendUsuarios.emit(this.i_usuario);
    }
  }

}
