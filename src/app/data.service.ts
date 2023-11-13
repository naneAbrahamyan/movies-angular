import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MoviesType } from './movie/Type';
import { map,filter, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})


export class DataService {

  private apiUrl = "https://api.themoviedb.org/3/movie/popular?api_key=d8d436ca878e548c5f0a4b2514f1e60b";

  constructor(private http: HttpClient) { }


  getMovies() : Observable<any>{
     return this.http.get(this.apiUrl);
  }
  
}
