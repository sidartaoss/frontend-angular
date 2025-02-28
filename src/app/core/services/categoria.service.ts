import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Categoria {
  id?: number;
  nome: string;
  descricao: string;
}

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private readonly API = 'http://localhost:8080/api/categorias';

  constructor(private http: HttpClient) {}

  listar(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.API);
  }

  buscarPorId(id: number): Observable<Categoria> {
    return this.http.get<Categoria>(`${this.API}/${id}`);
  }

  salvar(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(this.API, categoria);
  }

  atualizar(id: number, categoria: Categoria): Observable<Categoria> {
    return this.http.put<Categoria>(`${this.API}/${id}`, categoria);
  }

  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API}/${id}`);
  }
}
