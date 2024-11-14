
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {
  movieId: number = 0;
  movie: any = { title: '', year: null, synopsis: '', cover: '' };

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.movieId = +this.route.snapshot.paramMap.get('id')!;
    this.movieService.getMovieById(this.movieId).subscribe(data => {
      this.movie = data;
    });
  }

  updateMovie(): void {
    if (this.movie.title && this.movie.year && this.movie.synopsis && this.movie.cover) {
      this.movieService.updateMovie(this.movieId, this.movie).subscribe(
        () => {
          this.router.navigate(['/movies']);
        },
        error => {
          console.error('Error al actualizar la película:', error);
        }
      );
    } else {
      console.error('Error: Todos los campos deben estar llenos para actualizar la película');
    }
  }
}





