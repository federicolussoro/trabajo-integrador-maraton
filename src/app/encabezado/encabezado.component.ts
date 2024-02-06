import {Component} from '@angular/core';
import {AutenticacionService} from '../autenticacion.service';
import {CarritoService} from '../carrito.service';
import {CommonModule} from "@angular/common";
import {RouterModule, RouterLink} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-encabezado',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './encabezado.component.html',
  styleUrl: './encabezado.component.css',
  providers: [AutenticacionService, CarritoService],
})
export class EncabezadoComponent {
  constructor(public auth: AutenticacionService, public carrito: CarritoService) {}

  cerrarSesion() {
    this.auth.cerrarSesion();
  }
}
