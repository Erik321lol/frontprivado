import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component'; // Asegúrate de importar tu componente de Crear Cuenta
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { AdminUsuariosComponent } from './admin-usuarios/admin-usuarios.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { ConsultoresComponent } from './consultores/consultores.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ProyectoslistComponent } from './proyectoslist/proyectoslist.component';
import { ProyectoEstadoComponent } from './proyecto-estado/proyecto-estado.component';
import { ProyectoInformacionComponent } from './proyecto-informacion/proyecto-informacion.component';

const routes: Routes = [
  { path: '', component: LoginComponent }, // Ruta para el inicio de sesión
  { path: 'login', component: LoginComponent }, // Ruta para el inicio de sesión
  { path: 'crear-cuenta', component: CrearCuentaComponent }, // Ruta para crear cuenta
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]}, //
  { path: 'admin', component: AdminUsuariosComponent, canActivate: [AuthGuard]},
  { path: 'empresa', component: EmpresasComponent, canActivate: [AuthGuard]},
  { path: 'consultores', component: ConsultoresComponent, canActivate: [AuthGuard]},
  { path: 'proyectos', component: ProyectosComponent, canActivate: [AuthGuard]},
  { path: 'proyectoslist', component: ProyectoslistComponent, canActivate: [AuthGuard]},
  { path: 'proyectosEstado', component: ProyectoEstadoComponent, canActivate: [AuthGuard]},
  { path: 'proyectoInformacion', component: ProyectoInformacionComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
