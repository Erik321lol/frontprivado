import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Simulación de estado de autenticación
  private loggedIn = false; // Cambia esto según la lógica real

  constructor() { }

  login() {
    this.loggedIn = true; // Cambia esto para manejar el inicio de sesión real
  }

  logout() {
    this.loggedIn = false; // Cambia esto para manejar la salida real
  }

  isLoggedIn(): boolean {
    return this.loggedIn; // Retorna el estado de autenticación
  }
}
