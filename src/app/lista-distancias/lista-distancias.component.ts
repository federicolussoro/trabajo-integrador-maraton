import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../carrito.service';
import { Distancia } from '../distancia';
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-lista-distancias',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './lista-distancias.component.html',
  styleUrl: './lista-distancias.component.css',
  providers: [CarritoService],
})
export class ListaDistanciasComponent implements OnInit {
  distancias: Distancia[] = [];

constructor(private carritoService: CarritoService) {}

  agregarAlCarrito(distancia: Distancia) {
    this.carritoService.setDistancia(distancia);
    window.alert('Tu distancia ha sido agregada al carrito!');
  }

  ngOnInit(): void {
    this.carritoService.getDistancias().subscribe(data => {
      this.distancias = data;
    });
  }
}
