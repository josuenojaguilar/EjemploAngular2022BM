import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/productos.model';
import { ProductosService } from 'src/app/services/productos.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.scss'],
  providers: [ProductosService, UsuarioService]
})
export class GraficasComponent implements OnInit {
  chartOptions = {
    responsive: true,
  };
  //Nombres productos
  chartLabels:any = [];
  //cantidad de producto
  chartData:any = [];
  chartColors:any = [
    {
      backgroundColor: []
    }
  ];
  chartLegend = true;
  chartPlugins = [];

  //PRODUCTOS
  public modelProductoGet:any = [];

  constructor(
    public _productoService: ProductosService,
    public _usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.getProductos()
  }

  getProductos(){
    this._productoService.obtenerProductos(this._usuarioService.obtenerToken()).subscribe(
      (response)=>{
        console.log(response);
        this.modelProductoGet = response.productos;
        this.modelProductoGet.forEach(dato => {
          this.chartLabels.push(dato.nombre);
          this.chartData.push(dato.cantidad);
          this.chartColors[0].backgroundColor.push(`#${ Math.floor(Math.random()*16777215).toString(16)}`)
        });
      },
      (error)=>{

      }
    )
  }

}
