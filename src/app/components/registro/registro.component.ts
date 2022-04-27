import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  user: Usuario;
  repeatPass: string = '';

  constructor(
    private userRest: UsuarioService,
    public router: Router
  ) {
    this.user = new Usuario(
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      [{
        nombreProducto: "",
        cantidadComprada: 0,
        precioUnitario: 0
      }],
      0
    );
   }

  ngOnInit(): void {
  }

  checkPass(){
    let valid: boolean = false;
    if(this.repeatPass != this.user.password){
      return valid = false;
    }else{
      return valid = true;
    }
  }

  register(){
    if(this.checkPass() === true){
      this.userRest.register(this.user).subscribe({
        next: (response:any)=>{
          alert('Usuario creado satisfactoriamente, ya puedes logearte con el email: '+ response.usuario.email);
          this.router.navigate(['/login']);
        }, 
        error: (err)=> alert(err.error.mensaje)
      })
    }else{
      alert('La contraseña no coincide');
    }
  }

}
