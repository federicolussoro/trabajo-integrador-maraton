import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD_avDR347ybGyLveNvZGJdJBmgTCIw1LU",
  authDomain: "trabajo-integrador-maraton.firebaseapp.com",
  projectId: "trabajo-integrador-maraton",
  storageBucket: "trabajo-integrador-maraton.appspot.com",
  messagingSenderId: "221765118984",
  appId: "1:221765118984:web:62639f0ff42abea07a35bd"
};

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  private auth;
  constructor() {
    initializeApp(firebaseConfig);
    this.auth = getAuth();
  }

  iniciarSesion(mail: string, contrasena: string) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, mail, contrasena)
      .then((userCredential) => {
         //Signed in
        const user = userCredential.user;
        window.alert(`Inicio exitoso. Mail: ${user.email}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        window.alert(`Error: ${errorCode}, ${errorMessage}`);
      });
  }

  registrar(mail: string, contrasena: string) {
    if (!this.emailEsValido(mail)) {
      window.alert('El correo electrónico proporcionado no es válido.');
      return;
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, mail, contrasena)
      .then((userCredential) => {
        const user = userCredential.user;
        window.alert(`Registro exitoso. Mail: ${user.email}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        window.alert(`Error: ${errorCode}, ${errorMessage}`);
      });
  }

  cerrarSesion() {
    const auth = getAuth();
    signOut(auth).then(() => {
      window.alert('Sesión cerrada exitosamente');
    }).catch((error) => {
      window.alert('Error al cerrar la sesión.');
    });
  }

  emailEsValido(email: string): boolean {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  estaLogueado(): boolean {
    const user = this.auth.currentUser;
    return !!user;
  }
}


