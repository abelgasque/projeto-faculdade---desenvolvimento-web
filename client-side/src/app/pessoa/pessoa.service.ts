import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private http: HttpClient) { }

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
