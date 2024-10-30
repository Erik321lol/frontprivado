import { Component } from '@angular/core';
import { UsuarioService } from '../servicios/usuario.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  emailError: string = '';
  passwordError: string = '';
  sessionError: string = '';

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private authService: AuthService
  ) { }

  onSubmit() {
    console.log('Intentando iniciar sesión...'); // Verifica si el método se llama
    this.emailError = '';
    this.passwordError = '';
    this.sessionError = '';

    if (!this.email) {
      this.emailError = 'Por favor, ingresa tu correo electrónico.';
    }
    if (!this.password) {
      this.passwordError = 'Por favor, ingresa tu contraseña.';
    }

    if (this.email && this.password) {
      this.usuarioService.obtenerUsuarioPorCorreo(this.email).subscribe(
        response => {
          console.log('Respuesta del API:', response); // Log de la respuesta
          if (response && response.length > 0 && response[0].correo === this.email && response[0].contrasena === this.password) {
            this.authService.login();
            console.log('Correo a enviar:', this.email); // Verifica el correo
            localStorage.setItem('userEmail', this.email); // Almacena en Local Storage
            this.router.navigate(['/home']);
          } else {
            this.sessionError = 'No se pudo iniciar sesión';
          }
        },
        error => {
          console.error('Error al obtener el usuario:', error);
        }
      );
    }
  }

  irACrearCuenta() {
    this.router.navigate(['/crear-cuenta']);
  }
}
