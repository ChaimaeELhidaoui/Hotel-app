import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
   user={firstname:'',lastname:'',email:'',password:''};

  constructor(private auth:AuthServiceService,private router:Router) { }

  ngOnInit() {


  }
  onConnexion(){
  this.auth.connexion(this.user.email,this.user.password)
   .then(userCredential => {
      console.log('connexion avec succès :', userCredential);
      this.router.navigate(['/imanepage']);
    })
    .catch(error => {
      console.log('Erreur lors de la connexion:', error);
    });
 };

}
