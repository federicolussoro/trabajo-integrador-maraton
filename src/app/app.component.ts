import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { RouterModule} from "@angular/router";
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EncabezadoComponent, PiePaginaComponent, RouterModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'trabajo-integrador-maraton';

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        console.log('NavigationStart:', event);
      } else if (event instanceof NavigationEnd) {
        console.log('NavigationEnd:', event);
      } else if (event instanceof NavigationError) {
        console.error('NavigationError:', event.error);
      }
    });
  }
}
