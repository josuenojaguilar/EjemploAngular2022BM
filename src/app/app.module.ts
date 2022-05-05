import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EjemploComponent } from './components/ejemplo/ejemplo.component';
import { FormsModule } from '@angular/forms';
import { VerProductoComponent } from './components/ver-producto/ver-producto.component';
import { ChartsModule } from '@rinminase/ng-charts';
import { GraficasComponent } from './components/graficas/graficas.component';
import { InicioUsuarioComponent } from './components/inicio-usuario/inicio-usuario.component';
import { ActualizarUsuarioComponent } from './components/actualizar-usuario/actualizar-usuario.component';
import { SearchPipe } from './pipes/search.pipe';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    NavbarComponent,
    EjemploComponent,
    VerProductoComponent,
    GraficasComponent,
    InicioUsuarioComponent,
    ActualizarUsuarioComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
