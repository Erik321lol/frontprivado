// src/app/proyecto-estado/proyecto-estado.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Estado {
    ID_Estado: number;
    Descripcion: string;
}

@Component({
    selector: 'app-proyecto-estado',
    templateUrl: './proyecto-estado.component.html',
    styleUrls: ['./proyecto-estado.component.css'],
})
export class ProyectoEstadoComponent implements OnInit {
    proyectos: any[] = [];
    estados: Estado[] = [
        { ID_Estado: 1, Descripcion: 'Inicio' },
        { ID_Estado: 2, Descripcion: 'Ejecución' },
        { ID_Estado: 3, Descripcion: 'Suspendido' },
        { ID_Estado: 4, Descripcion: 'Finalizado' },
    ];
    estadoId: number = 2; // Valor por defecto

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
        this.getProyectosPorEstado(this.estadoId);
    }

    getProyectosPorEstado(estadoId: number): void {
        // this.http.get<any[]>(`http://localhost:5000/privado/proyectoestado/${estadoId}`).subscribe(
        this.http.get<any[]>(`https://apiprivado.onrender.com/privado/proyectoestado/${estadoId}`).subscribe(
            (data) => {
                this.proyectos = data;
            },
            (error) => {
                console.error('Error al obtener la información de los proyectos', error);
            }
        );
    }

    onEstadoChange(estadoId: number): void {
        this.estadoId = estadoId;
        this.getProyectosPorEstado(estadoId); // Obtener proyectos al cambiar el estado
    }
}
