import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../servicios/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  email: any = '';

  constructor(
    private usuarioService: UsuarioService,
  ) { }

  ngOnInit(): void {
    this.email = localStorage.getItem('userEmail'); // Recupera el correo

    this.usuarioService.obtenerUsuarioPorCorreo(this.email).subscribe(
      response => {
        console.log('Respuesta del home:', response); // Log de la respuesta
        localStorage.setItem('userEmail', this.email); // Almacena en Local Storage
      },
      error => {
        console.error('Error al obtener el usuario:', error);
      }
    );
    console.log('Email recibido:', this.email); // Esto debería imprimir el correo
  }
}
