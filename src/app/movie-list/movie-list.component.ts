import { Component, OnInit } from '@angular/core';
import { MovieService } from './../Services/movie.service'
import { Observable } from 'rxjs';
import { Movie } from './../models/movies.models';
import { NavbarService } from './../Services/navbar.service';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies$ : Observable<Movie[]>
  constructor(private movieService: MovieService, private navbarService: NavbarService) { }

  ngOnInit() {
    this.movies$ = this.movieService.getMovieFromHttp();

    this.navbarService.title.next('Movie night');
    //console.log(this.movies$);
  }

}
