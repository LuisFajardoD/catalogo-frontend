
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie: any;
  showConfirm: boolean = false;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? +idParam : 0;
    this.movieService.getMovieById(id).subscribe(data => {
      this.movie = data;
    });
  }

  confirmDelete(): void {
    this.showConfirm = true;
  }

  cancelDelete(): void {
    this.showConfirm = false;
  }

  deleteMovie(): void {
    this.movieService.deleteMovie(this.movie.id).subscribe(() => {
      this.router.navigate(['/movies']);
    });
  }
}


