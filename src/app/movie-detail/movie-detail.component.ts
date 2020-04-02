import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieService } from './../Services/movie.service'
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../models/movies.models';
import { Subscription } from 'rxjs';
import { NavbarService } from './../Services/navbar.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit, OnDestroy {

  id: number;
  movie: Movie;
  movieSub$: Subscription;

  constructor(
     private movieService: MovieService,
     private route: ActivatedRoute,
     private navbarService: NavbarService
     ) { }

  // the '+' is to convert any strig to the number

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.movieSub$ = this.movieService.movie(this.id).subscribe(movie => {
      this.movie = movie;
      this.navbarService.title.next(movie.name);
      //console.log(this.movie);
    })
  }


  ngOnDestroy(){
    this.movieSub$.unsubscribe();
  }

}
