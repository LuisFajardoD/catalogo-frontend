
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Verifica si es la primera vez que carga la aplicación
    const isFirstVisit = sessionStorage.getItem('visited');

    if (!isFirstVisit) {
      // Redirige a la página de bienvenida
      this.router.navigate(['/']);
      // Guarda en sessionStorage para no redirigir nuevamente
      sessionStorage.setItem('visited', 'true');
    }
  }
}
