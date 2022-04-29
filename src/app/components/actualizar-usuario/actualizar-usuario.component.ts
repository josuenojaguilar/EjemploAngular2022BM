import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrls: ['./actualizar-usuario.component.scss']
})
export class ActualizarUsuarioComponent implements OnInit {
  user; 
  name;
  email;

  constructor(
    private userRest: UsuarioService
  ) { }

  ngOnInit(): void {
    this.user = this.userRest.obtenerIdentidad();
    this.name = this.user.nombre;
    this.email = this.user.email;
  }

  updateUser(){
    this.userRest.updateUser(this.user._id, this.user).subscribe({
      next: (response:any)=> {
        alert('Usuario actualizado correctamente');
        localStorage.setItem('identidad', JSON.stringify(response.usuario))
      },
      error: (err)=> alert(err.error.mensaje)
    });
  }

}
