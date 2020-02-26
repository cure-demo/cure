import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { AngularFireAuthModule } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, public afAuth: AngularFireAuthModule) { }
  email: string;
  password: any;
  ngOnInit() {
  }
  login() {
    const emails = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(emails, password).then(
      (user) => {
        window.location.href = 'home';
      },
      (err) => {
        alert('Oops. ' + err.message);
      }
    );
  }
  navigateToSignup() {
    window.location.href = 'signup';
  }
}
