import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth,
    
    ) { }


  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(email, password)
      .then(() => resolve("Logged in successfully"))
      .catch((error) => reject("Oops! There is no user with provided email!"));
    })
    /*
    this.afAuth.signInWithEmailAndPassword(email, password).then(() => {
      this.snack.open("Logged in successfully", "close", {duration: 2000});
    }).catch((error) => {
      this.snack.open("Oops! User with the provided email does not exist!", "close", {duration: 2000});
    });
    */
  }
  logout() {
    this.afAuth.signOut();
  }
}
