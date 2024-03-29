import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
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
  @Input() montoTotal!: number;
  @Output() pagoRealizado = new EventEmitter();
  datosTarjeta!: string;

  onPagar() {
    this.pagoRealizado.emit();
  }
}
