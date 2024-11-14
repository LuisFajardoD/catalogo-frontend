
import { Component } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent {
  movie: any = { title: '', year: '', synopsis: '', cover: '' };

  constructor(private movieService: MovieService, private router: Router) {}

  addMovie(): void {
    this.movieService.addMovie(this.movie).subscribe(() => {
      this.router.navigate(['/movies']);
    });
  }
}
