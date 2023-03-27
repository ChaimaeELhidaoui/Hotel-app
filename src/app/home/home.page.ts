import { Component } from '@angular/core';
import lottie from 'lottie-web';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  ionViewDidEnter() {
    const animation = lottie.loadAnimation({
      container: document.getElementById('animation-container')  as Element,
      path: 'assets/homeanimation.json',
    });
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 5000);
  }
    }



