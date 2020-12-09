import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token')!)
  }

  getAllProdutos() : Observable<Produto[]>
{
  return this.http.get<Produto[]>('http://localhost:8080/produtos', this.token)
}
postProduto(produto: Produto) : Observable<Produto>{
  return this.http.post<Produto>('http://localhost:8080/produtos', produto, this.token)
}

}