import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-pago',
  standalone: true,
  imports: [
    FormsModule, CommonModule, HttpClientModule
  ],
  templateUrl: './pago.component.html',
  styleUrl: './pago.component.css'
})
export class PagoComponent {
  @Input() montoTotal!: number; // Recibe el monto total del carrito
  @Output() pagoRealizado = new EventEmitter();
  datosTarjeta!: string;

  onPagar() {
    this.pagoRealizado.emit(); // Emite un evento cuando el pago se realiza
  }
}
