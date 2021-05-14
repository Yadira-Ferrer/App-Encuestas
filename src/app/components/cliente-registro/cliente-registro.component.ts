import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/interfaces';

@Component({
  selector: 'app-cliente-registro',
  templateUrl: './cliente-registro.component.html',
  styleUrls: ['./cliente-registro.component.scss'],
})
export class ClienteRegistroComponent implements OnInit {

  usuario: string;
  correo: string;
  i_usuario: Usuario[] = [];

  constructor() { }

  ngOnInit() {}

  createUser() {
    this.i_usuario.push({nombre:this.usuario,correo:this.correo});
    this.usuario = '';
    this.correo = '';
  }

}
