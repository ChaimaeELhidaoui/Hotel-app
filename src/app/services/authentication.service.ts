import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
   inLogged=false;
  constructor(public firebaseAuth: AngularFireAuth,private router:Router) { }

  inscription(email:string,password:string){
    return this.firebaseAuth.createUserWithEmailAndPassword(email,password);
    

  }

  connexion(email:string,password:string){
    return this.firebaseAuth.signInWithEmailAndPassword(email,password);
  }


}
