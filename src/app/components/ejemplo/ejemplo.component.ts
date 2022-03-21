import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.scss']
})
export class EjemploComponent implements OnInit {
  title = 'Ejemplo';
  personas = [
    { nombre: 'Juan Solares', edad: 24 },
    { nombre: 'Cristian Quiñonez', edad: 15 },
    { nombre: 'Luis Perez', edad: 42 },
    { nombre: 'Iker Sandoval', edad: 8 }
  ];



  constructor() { }

  ngOnInit(): void {
  }

}
