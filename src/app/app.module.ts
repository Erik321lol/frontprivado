import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './sources/nav-bar/nav-bar.component';
import { AdminUsuariosComponent } from './admin-usuarios/admin-usuarios.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { ConsultoresComponent } from './consultores/consultores.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ProyectoslistComponent } from './proyectoslist/proyectoslist.component';
import { ProyectoEstadoComponent } from './proyecto-estado/proyecto-estado.component';
import { ProyectoInformacionComponent } from './proyecto-informacion/proyecto-informacion.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CrearCuentaComponent,
    HomeComponent,
    NavBarComponent,
    AdminUsuariosComponent,
    EmpresasComponent,
    ConsultoresComponent,
    ProyectosComponent,
    ProyectoslistComponent,
    ProyectoEstadoComponent,
    ProyectoInformacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
