import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase/app";
import { Router } from "@angular/router";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { HomeComponent } from '../home/home.component';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, public afAuth: AngularFireAuthModule) {}
  email: any;
  password: any;
  ngOnInit() {}
  login() {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.email, this.password)
      .then(
        user => {
          window.location.href = "home";
          this.router.navigateByUrl("home")
        },
        err => {
          alert("Oops. " + err.message);
        }
      );
  }
  navigateToSignup() {
    window.location.href = "signup";
  }
}
