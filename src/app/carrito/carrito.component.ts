import {Component, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from "@angular/router";
import {AutenticacionService} from "../autenticacion.service";
import {CarritoService} from '../carrito.service';
import {Distancia} from '../distancia';
import {PagoComponent} from "../pago/pago.component";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule, PagoComponent, RouterLink, HttpClientModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css',
  providers: [CarritoService, PagoComponent, AutenticacionService],
})
export class CarritoComponent {
  items = this.carritoService.getItems();

  constructor(
    public carritoService: CarritoService,
    public autenticacionService: AutenticacionService,
  ) {
  }

  onEliminar(distancia: Distancia): void {
    this.carritoService.eliminarDistancia(distancia);
    this.items = this.carritoService.getItems();
    window.alert('Distancia eliminada');
  }

  onPagoRealizado() {
    this.carritoService.limpiarCarrito();
    this.items = this.carritoService.getItems();
    window.alert('El pago se ha realizado.');
  }
}
