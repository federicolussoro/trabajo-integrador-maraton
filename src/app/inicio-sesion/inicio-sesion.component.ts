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
  styleUrl: './inicio-sesion.component.css',
  providers: [AutenticacionService],
})
export class InicioSesionComponent {
  @Output() loggedIn = new EventEmitter();

  loginForm = this.fb.group({
    contrasena: [''],
    mail: ['']
  });

  constructor(private fb: FormBuilder, public autenticacionService: AutenticacionService) {}

  onIniciar() {
    const contrasena = this.loginForm.value.contrasena || '';
    const mail = this.loginForm.value.mail || '';
    this.autenticacionService.iniciarSesion(mail, contrasena);
    this.loginForm.reset();
  }

  onRegistrar() {
    const contrasena = this.loginForm.value.contrasena || '';
    const mail = this.loginForm.value.mail || '';
    this.autenticacionService.registrar(mail, contrasena);
    this.loginForm.reset();
  }
}
