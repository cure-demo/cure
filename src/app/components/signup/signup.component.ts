import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase/app";
import { Router } from "@angular/router";
import { AngularFireAuthModule } from "@angular/fire/auth";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"]
})
export class SignupComponent implements OnInit {
  constructor(private router: Router, public afAuth: AngularFireAuthModule) {}
  email: any;
  password: any;
  confirm_password: any;
  ngOnInit() {}
  signup() {
    if (this.password === this.confirm_password) {
      console.log(this.email, this.password);
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            // this.router.navigate("home")
            console.log(user);
            window.location.href = "login";
            // var obj={
            //   "key":user,
            //   "user_data":JSON.parse(localStorage.getItem("user_data"))
            // }
            // localStorage.setItem("user", obj);
          },
          err => {
            alert("Oops. " + err.message);
          }
        );
    }
  }
}
