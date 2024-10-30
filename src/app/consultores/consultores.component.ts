import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-consultores',
  templateUrl: './consultores.component.html',
  styleUrls: ['./consultores.component.css']
})
export class ConsultoresComponent implements OnInit {
  consultores: any[] = []; 
  apellido: string = 'M'; 

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.cargarConsultores(); 
  }

  // Método para cargar consultores desde la API
  cargarConsultores() {
    //this.http.get<any[]>(`http://localhost:5000/privado/consultores/${this.apellido}`).subscribe(
    this.http.get<any[]>(`https://apiprivado.onrender.com/privado/consultores/${this.apellido}`).subscribe(
      data => {
        this.consultores = data; 
      },
      error => {
        console.error('Error al cargar consultores:', error);
      }
    );
  }
}

