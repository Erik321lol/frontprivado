import { Component } from '@angular/core';
import { UsuarioService } from '../servicios/usuario.service';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-admin-usuarios',
  templateUrl: './admin-usuarios.component.html',
  styleUrl: './admin-usuarios.component.css'
})
export class AdminUsuariosComponent {
  usuarios: any[] = []; // Lista de usuarios
  nuevoUsuario: { nombre: string; correo: string } = { nombre: '', correo: '' }; // Datos del nuevo usuario
  usuarioEditado: any = null; // Datos del usuario que se está editando

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.cargarUsuarios(); // Carga la lista de usuarios al iniciar
  }

  // Método para cargar la lista de usuarios
  cargarUsuarios() {
    this.usuarioService.obtenerUsuarioPorCorreo('').subscribe((usuarios: any[]) => {
      this.usuarios = usuarios;
    });
  }

  // Método para agregar un nuevo usuario
  agregarUsuario() {
    this.usuarioService.agregarUsuario(this.nuevoUsuario).subscribe(usuario => {
      this.usuarios.push(usuario); // Agrega el nuevo usuario a la lista
      this.nuevoUsuario = { nombre: '', correo: '' }; // Reinicia el formulario
    });
  }

  // Método para preparar la edición de un usuario
  prepararEdicion(usuario: any) {
    this.usuarioEditado = { ...usuario }; // Clona el usuario para editar
  }

  // Método para editar un usuario existente
  editarUsuario() {
    if (this.usuarioEditado) {
      this.usuarioEditado.fecha_nacimiento = format(this.usuarioEditado.fecha_nacimiento, 'yyyy-MM-dd');
      console.log('fecha:', this.usuarioEditado.fecha_nacimiento)
      this.usuarioService.editarUsuario(this.usuarioEditado.id, this.usuarioEditado).subscribe(() => {
        const index = this.usuarios.findIndex(u => u.id === this.usuarioEditado.id);
        if (index > -1) {

          this.usuarios[index] = this.usuarioEditado; // Actualiza el usuario en la lista
        }
        this.usuarioEditado = null; // Reinicia la edición
      });
    }
  }

  // Método para eliminar un usuario
  eliminarUsuario(id: number) {
    this.usuarioService.eliminarUsuario(id).subscribe(() => {
      this.usuarios = this.usuarios.filter(usuario => usuario.id !== id); // Elimina el usuario de la lista
    });
  }
}
