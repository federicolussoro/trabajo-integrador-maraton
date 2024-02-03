import {Routes} from '@angular/router';
import {ListaDistanciasComponent} from './lista-distancias/lista-distancias.component';
import {CarritoComponent} from './carrito/carrito.component';
import {PagoComponent} from './pago/pago.component';
import {InicioSesionComponent} from './inicio-sesion/inicio-sesion.component';


export const routes: Routes = [
  {path: '', component: ListaDistanciasComponent},
  {path: 'carrito', component: CarritoComponent},
  {path: 'inicio-sesion', component: InicioSesionComponent},
  {path: 'pago', component: PagoComponent}
];
