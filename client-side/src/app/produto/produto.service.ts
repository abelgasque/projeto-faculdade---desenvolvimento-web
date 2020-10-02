import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  getAllCategorias(): Promise<any> {
    return this.http.get<any>(`/api/categoria/listar`)
    .toPromise()
    .then(response => response);
  }

  getSubcategoriasByIdCategoria(idCategoria: number): Promise<any> {
    return this.http.get<any>(`/api/subcategoria/listar/${idCategoria}`)
    .toPromise()
    .then(response => response);
  }
}
