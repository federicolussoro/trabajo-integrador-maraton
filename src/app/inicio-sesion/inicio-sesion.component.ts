import { Component, EventEmitter, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { AutenticacionService } from '../autenticacion.service';
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-inicio-sesion',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './inicio-sesion.component.html',
  styleUrl: './inicio-sesion.component.css'
})
export class InicioSesionComponent {
  @Output() loggedIn = new EventEmitter();

  loginForm = this.fb.group({
    usuario: [''],
    mail: ['']
  });

  constructor(private fb: FormBuilder, public autenticacionService: AutenticacionService) {}

  onIniciar() {
    const usuario = this.loginForm.value.usuario || '';
    const mail = this.loginForm.value.mail || '';
    this.autenticacionService.login(usuario, mail);
    this.loginForm.reset();
  }

  onRegistrar() {
    const usuario = this.loginForm.value.usuario || '';
    const mail = this.loginForm.value.mail || '';
    this.autenticacionService.register(usuario, mail);
    this.loginForm.reset();
  }

  onCerrar() {
    this.autenticacionService.logout();
  }
}
