import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Distancia} from './distancia';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  constructor(private http: HttpClient) {
  }

  setDistancia(distancia: Distancia) {
    if (!distancia || !distancia.id) {
      console.error('Distancia inválida:', distancia);
      return;
    }

    let items = this.getItems();
    const item = items.find((item: { distancia: Distancia, contador: number }) => item.distancia.id === distancia.id);
    if (item) {
      item.contador++;
    } else {
      items.push({distancia, contador: 1});
    }
    localStorage.setItem('carrito', JSON.stringify(items));
  }

  eliminarDistancia(distancia: Distancia) {
    let items = this.getItems();
    const index = items.findIndex((item: {
      distancia: Distancia,
      contador: number
    }) => item.distancia.id === distancia.id);
    if (index !== -1) {
      items.splice(index, 1);
    }
    localStorage.setItem('carrito', JSON.stringify(items));
  }

  getItems() {
    const items = localStorage.getItem('carrito');
    return items ? JSON.parse(items) : [];
  }

  limpiarCarrito() {
    localStorage.removeItem('carrito');
  }

  getDistancias() {
    return this.http.get<Distancia[]>('/assets/distancias.json');
  }

  getTotalItem() {
    const items = this.getItems();
    return items.reduce((total: number, item: { distancia: Distancia, contador: number }) => total + item.contador, 0);
  }

  getTotalPrecio() {
    const items = this.getItems();
    return items.reduce((total: number, item: {
      distancia: Distancia,
      contador: number
    }) => total + item.contador * item.distancia.precio, 0);
  }
}
