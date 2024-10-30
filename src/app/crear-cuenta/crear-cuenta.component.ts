import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../servicios/usuario.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})
export class CrearCuentaComponent {
  nombre: string = '';
  apellido: string = '';
  correo: string = '';
  contrasena: string = '';
  direccion: string = '';
  telefono: string = '';
  message: string = '';

  // Variables para mensajes de error
  nombreError: string = '';
  apellidoError: string = '';
  correoError: string = '';
  contrasenaError: string = '';
  direccionError: string = '';
  telefonoError: string = '';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { } // Inyección del servicio

  onSubmit() {
    // Reiniciar mensajes de error
    this.nombreError = '';
    this.apellidoError = '';
    this.correoError = '';
    this.contrasenaError = '';
    this.direccionError = '';
    this.telefonoError = '';
    this.message = '';

    // Validar campos
    if (!this.nombre) {
      this.nombreError = 'Por favor, ingresa tu nombre.';
    }
    if (!this.apellido) {
      this.apellidoError = 'Por favor, ingresa tu apellido.';
    }
    if (!this.correo) {
      this.correoError = 'Por favor, ingresa tu correo electrónico.';
    }
    if (!this.contrasena) {
      this.contrasenaError = 'Por favor, ingresa tu contraseña.';
    }
    if (!this.direccion) {
      this.direccionError = 'Por favor, ingresa tu dirección.';
    }
    if (!this.telefono) {
      this.telefonoError = 'Por favor, ingresa tu número de teléfono.';
    }

    // Si todos los campos son válidos, proceder
    if (this.nombre && this.apellido && this.correo && this.contrasena && this.direccion && this.telefono) {
      const usuario = {
        nombre: this.nombre,
        apellido: this.apellido,
        correo: this.correo,
        contrasena: this.contrasena,
        telefono: this.telefono,
        direccion: this.direccion,
        rol: '2', // Valor fijo
        estado: 'activo' // Valor fijo
      };

      // this.http.post('http://localhost:5000/usuario', usuario).subscribe(
        this.http.post('https://apiprivado.onrender.com/usuario', usuario).subscribe(
        response => {
          this.message = 'Usuario creado'; // Mensaje de éxito
          this.message = "Usuario creado con éxito"; // Actualiza el mensaje
          setTimeout(() => {
            this.router.navigate(['login']);// Redirige después de un tiempo
          }, 2000); // Redirige después de 2 segundos
        },
        error => {
          this.message = 'Error al crear el usuario'; // Mensaje de error
          console.error('Error:', error); // Manejo del error
        })
    }
  }
}

