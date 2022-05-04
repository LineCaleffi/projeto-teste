import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor(private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get('http://localhost:8080/series');
  }

  getOne(id: number){
    return this.httpClient.get(`http://localhost:8080/series/${id}`);
  }

  save(obj: SeriesService){
    return this.httpClient.post('http://localhost:8080/series', obj);
  }

  update(id : number, obj : SeriesService){
    return this.httpClient.patch(`http://localhost:8080/series/${id}`, obj);
  }

  delete(id:number){
    return this.httpClient.delete(`http://localhost:8080/series/${id}`);
  }
}
