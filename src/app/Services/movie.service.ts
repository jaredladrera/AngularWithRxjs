import { Injectable } from '@angular/core';
import { movies, Movie } from './../models/movies.models';
import { of } from 'rxjs'; 
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
   baseUrl = 'http://localhost:3000/movies';

  constructor(private http: HttpClient) { }

  getMovieFromHttp = () => {
    return this.http.get<Movie[]>(this.baseUrl)
  }

  movieFromHttp = (id: number) => {
    return this.http.get<Movie>('${this.baseUrl}/${id}');
  }

  getMovies() {
    return of(movies);
  }

  movie = (id: number) => {
    return of(
      movies.find(movie => +movie.id === +id)
    )
  }
}
