import { Component } from '@angular/core';
import { Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-pie-pagina',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './pie-pagina.component.html',
  styleUrl: './pie-pagina.component.css'
})
export class PiePaginaComponent {

}
