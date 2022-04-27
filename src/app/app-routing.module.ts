import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//IMPORTACION COMPONENTES
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { EjemploComponent } from './components/ejemplo/ejemplo.component';
import { VerProductoComponent } from './components/ver-producto/ver-producto.component';
import { GraficasComponent } from './components/graficas/graficas.component';
import { InicioUsuarioComponent } from './components/inicio-usuario/inicio-usuario.component';
import { UsuarioGuard } from './services/usuario.guard';
import { ActualizarUsuarioComponent } from './components/actualizar-usuario/actualizar-usuario.component';
// usuario/ejemplo
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'graficas', component: GraficasComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'ejemplo', component: EjemploComponent },
  { path: 'usuario',  component: InicioUsuarioComponent, children: [
    { path: 'ejemplo', component: EjemploComponent },
    { path: 'actualizarUsuario', component: ActualizarUsuarioComponent},
    { path: 'verProducto/:idProducto', component: VerProductoComponent },
    { path: 'graficas', component: GraficasComponent }
  ]},
  { path: '**', component: LoginComponent } //Ruta final, redirecciona si no existe la ruta.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
