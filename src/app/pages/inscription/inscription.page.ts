import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {
   user={firstname:'',lastname:'',email:'',password:''};
  constructor(private auth:AuthServiceService,private router:Router) { }

  ngOnInit() {
  }
 onSubmit(){
  this.auth.inscription(this.user.email,this.user.password)
   .then(userCredential => {
      console.log('Utilisateur créé avec succès :', userCredential);
      this.router.navigate(['/login']);
    })
    .catch(error => {
      console.log('Erreur lors de la création de l\'utilisateur :', error);
    });
 };


}
