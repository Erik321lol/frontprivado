import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
    selector: 'app-proyectoslist',
    templateUrl: './proyectoslist.component.html',
    styleUrl: './proyectoslist.component.css'
})
export class ProyectoslistComponent {
    proyectos: any[] = [];

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
        //this.http.get<any[]>('http://localhost:5000/privado/proyectoinformacion').subscribe(
        this.http.get<any[]>('https://apiprivado.onrender.com/privado/proyectoinformacion').subscribe(
            (data) => {
                this.proyectos = data;
            },
            (error) => {
                console.error('Error al obtener la información de los proyectos', error);
            }
        );
    }
}
