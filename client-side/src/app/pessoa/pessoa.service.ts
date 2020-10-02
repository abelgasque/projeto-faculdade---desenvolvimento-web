import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private http: HttpClient) { }

  incluir(entidade: any): Promise<any> {
    return this.http.post<any>(`/api/pessoa/incluir`, entidade).toPromise();
  }
  
  alterar(id:number, entidade: any): Promise<any> {
    return this.http.put<any>(`/api/pessoa/alterar/${id}`, entidade).toPromise();
  }

  getById(id: number): Promise<any> {
    return this.http.get<any>(`/api/pessoa/buscar/${id}`)
    .toPromise()
    .then(response => response);
  }

  getAll(): Promise<any> {
    return this.http.get<any>(`/api/pessoa/listar`)
    .toPromise()
    .then(response => response);
  }
}
