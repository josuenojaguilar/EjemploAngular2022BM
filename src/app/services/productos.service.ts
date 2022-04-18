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

  obtenerProductos(token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token)

    return this._http.get(this.url + '/productos', { headers: headersToken })
  }

  obtenerProductoId(id : String): Observable<any> {

    return this._http.get(this.url + '/productos/' + id, { headers: this.headersVariable })
  }

  agregarProducto(modeloProducto: Producto, token): Observable<any> {
    let parametros = JSON.stringify(modeloProducto);

    return this._http.post(this.url + '/agregarProductos', parametros, {headers: this.headersVariable})
  }

  editarProducto(modeloProducto: Producto): Observable<any> {
    let parametros = JSON.stringify(modeloProducto);

    return this._http.put(this.url + '/editarProductos/' + modeloProducto._id, parametros, { headers: this.headersVariable})
  }

  eliminarProducto(id : String): Observable<any> {

    return this._http.delete(this.url + '/eliminarProducto/' + id, { headers: this.headersVariable })
  }
}
