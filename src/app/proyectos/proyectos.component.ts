import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos: any[] = [];
  idConsultor: number = 0;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    //this.cargarProyectos();
  }

  cargarProyectos() {
    //this.http.get<any[]>(`http://localhost:5000/privado/proyectos/${this.idConsultor}`).subscribe(
      this.http.get<any[]>(`https://apiprivado.onrender.com/privado/proyectos/${this.idConsultor}`).subscribe(
      data => {
        this.proyectos = data;
      },
      error => {
        console.error('Error al cargar proyectos:', error);
      }
    );
  }


  consultarProyectos() {
    this.cargarProyectos();
  }
}
