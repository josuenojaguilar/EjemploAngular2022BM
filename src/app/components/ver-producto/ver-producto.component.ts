import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-ver-producto',
  templateUrl: './ver-producto.component.html',
  styleUrls: ['./ver-producto.component.scss'],
  providers: [ProductosService]
})
export class VerProductoComponent implements OnInit {
  product;
  load: boolean = false;

  constructor(
    public _activatedRoute: ActivatedRoute,
    public _productosService: ProductosService
  ) { }

  ngOnInit(): void { //ciclo de vida del componente
    this._activatedRoute.paramMap.subscribe((dataRuta)=>{
      this.getProductoId(dataRuta.get('idProducto'));
    })
  }

  getProductoId(idProducto){
    this._productosService.obtenerProductoId(idProducto).subscribe({
      next: (response)=>{
        this.product = response.producto;
        this.load = true;
      },
      error: (err)=> alert(err.error.mensaje)
    })
  }

}
