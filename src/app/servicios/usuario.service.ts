import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  //private apiUrl = 'http://localhost:5000/usuario/';
  private apiUrl = 'https://apiprivado.onrender.com/usuario/';

  constructor(private http: HttpClient) { }

  obtenerUsuarioPorCorreo(correo: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${correo}`);
  }

  // Agregar usuario
  agregarUsuario(usuario: any): Observable<any> {
    return this.http.post(this.apiUrl, usuario); // POST a /usuario
  }

  // Editar usuario
  editarUsuario(id: number, usuario: any): Observable<any> {
    return this.http.put(`${this.apiUrl}${id}`, usuario); // PUT a /usuario/id
  }

  // Eliminar usuario
  eliminarUsuario(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}${id}`); // DELETE a /usuario/id
  }

}