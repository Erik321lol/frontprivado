import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {
  empresas: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.cargarEmpresas();
  }

  cargarEmpresas() {
    //this.http.get<any[]>('http://localhost:5000/privado/empresas').subscribe(data => {
    this.http.get<any[]>('https://apiprivado.onrender.com/privado/empresas').subscribe(data => {
      this.empresas = data;
    }, error => {
      console.error('Error al cargar empresas:', error);
    });
  }
}
