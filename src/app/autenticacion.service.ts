import { Injectable } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  private sesionIniciada = new BehaviorSubject<boolean>(false);

  constructor() {}

  login(usuario: string, mail: string) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, usuario, mail)
      .then((userCredential) => {
         //Signed in
        const user = userCredential.user;
        console.log(`Login exitoso. Usuario: ${user.displayName}, Mail: ${user.email}`);
        this.sesionIniciada.next(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`Error: ${errorCode}, ${errorMessage}`);
      });
  }

  register(usuario: string, mail: string) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, usuario, mail)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(`Registro exitoso. Usuario: ${user.displayName}, Mail: ${user.email}`);
        this.sesionIniciada.next(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`Error: ${errorCode}, ${errorMessage}`);
      });
  }

  logout() {
    this.sesionIniciada.next(false);
    window.alert('Sesion cerrada');
  }

  estaLogueado(): Observable<boolean> {
    return this.sesionIniciada.asObservable();
  }
}
