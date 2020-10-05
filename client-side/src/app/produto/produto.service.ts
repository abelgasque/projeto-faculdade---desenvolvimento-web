import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  incluir(entidade: any): Promise<any> {
    return this.http.post<any>(`/api/produto/incluir`, entidade).toPromise();
  }
  
  alterar(id:number, entidade: any): Promise<any> {
    return this.http.put<any>(`/api/produto/alterar/${id}`, entidade).toPromise();
  }

  getById(id: number): Promise<any> {
    return this.http.get<any>(`/api/produto/buscar/${id}`)
    .toPromise()
    .then(response => response);
  }

  getAll(): Promise<any> {
    return this.http.get<any>(`/api/produto/listar`)
    .toPromise()
    .then(response => response);
  }

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
