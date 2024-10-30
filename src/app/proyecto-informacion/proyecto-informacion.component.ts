import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-proyecto-informacion',
    templateUrl: './proyecto-informacion.component.html',
    styleUrls: ['./proyecto-informacion.component.css'],
})
export class ProyectoInformacionComponent {
    proyectos: any[] = [];
    empresaId: number = 0;

    constructor(private http: HttpClient) { }

    getProyectosPorEmpresa(): void {
        if (this.empresaId) {
            // this.http.get<any[]>(`http://localhost:5000/privado/proyectoempresa/${this.empresaId}`).subscribe(
            this.http.get<any[]>(`https://apiprivado.onrender.com/privado/proyectoempresa/${this.empresaId}`).subscribe(
                (data) => {
                    this.proyectos = data;
                },
                (error) => {
                    console.error('Error al obtener la información de los proyectos', error);
                }
            );
        } else {
            this.proyectos = [];
        }
    }
}
