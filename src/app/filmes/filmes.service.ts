import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  constructor(private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get('http://localhost:8080/filmes');
  }

  getOne(id: number){
    return this.httpClient.get(`http://localhost:8080/filmes/${id}`);
  }

  save(obj: FilmesService){
    return this.httpClient.post('http://localhost:8080/filmes', obj);
  }

  update(id : number, obj : FilmesService){
    return this.httpClient.patch(`http://localhost:8080/filmes/${id}`, obj);
  }

  delete(id:number){
    return this.httpClient.delete(`http://localhost:8080/filmes/${id}`);
  }
}
