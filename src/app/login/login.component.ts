
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

import  firebase from 'firebase/compat/app';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AngularFireAuth ,private router:Router) {}

  loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    this.auth.signInWithPopup(provider).then(result => {
      console.log('Login successful', result);
      this.router.navigate(['/customers']);
    }).catch(error => {
      console.error('Login error', error);
    });
  }

  ngOnInit(): void {}
}
