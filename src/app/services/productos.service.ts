import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Producto } from '../models/productos.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  public url: String = 'http://localhost:3000/api';
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');


  constructor(public _http: HttpClient) { }

  obtenerProductos(): Observable<any> {

    return this._http.get(this.url + '/productos', { headers: this.headersVariable })
  }

  agregarProducto(modeloProducto: Producto): Observable<any> {
    let parametros = JSON.stringify(modeloProducto);

    return this._http.post(this.url + '/agregarProductos', parametros, {headers: this.headersVariable})
  }
}
