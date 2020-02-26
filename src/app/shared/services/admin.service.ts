import { Injectable } from '@angular/core';
// import { HttpClient } from 'selenium-webdriver/http';
import { GlobalService } from '../../app.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { User } from "src/app/models/user.model";
import { User } from '../models/user.model';
import { AppState } from 'src/app/app-state';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  token: any;
  constructor(
    private globalService: GlobalService,
    private http: HttpClient,
    public state: AppState
  ) {
    // if (JSON.parse(localStorage.getItem("user"))) {
    //   this.token = JSON.parse(localStorage.getItem("user")).key;
    // }
    // this.getUserToken();
    // console.log(JSON.parse(localStorage.getItem("user")));
    // this.token = 346;
  }

  // getUserToken() {
  //   let localUser = JSON.parse(localStorage.getItem("user"));
  //   if (localUser) {
  //     this.state.isLoggedIn = JSON.parse(
  //       localStorage.getItem("user")
  //     ).isLoggedIn;
  //     this.state.user = JSON.parse(localStorage.getItem("user"));
  //     this.token = this.state.user.key;
  //     return this.state.user.key;
  //   } else {
  //     this.state.isLoggedIn = false;
  //     this.state.user = null;
  //     return "";
  //   }

  //   // let localUser = JSON.parse(localStorage.getItem("user"));
  //   // if (localUser) {
  //   //   return localUser.key;
  //   // }
  // }
  // login(username: string, password: string): Observable<User> {
  //   const httpOptions = {
  //     headers: new HttpHeaders({ "Content-Type": "application/json" })
  //   };
  //   const payload = {
  //     email: username,
  //     password: password
  //   };
  //   return this.http
  //     .post<User>(this.globalService.Login, payload, httpOptions)
  //     .pipe();
  // }

  // getProjects(userid: any): Observable<User> {
  //   this.getUserToken();
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       Authorization: "Token " + this.token,
  //       "Content-Type": "application/json",
  //       Accept: "application/json"
  //     })
  //   };
  //   return this.http
  //     .get<User>(this.globalService.projectsCreatedBy + userid, httpOptions)
  //     .pipe();
  // }

  getckd(payload: any): Observable<User> {
    // this.getUserToken();
    const httpOptions = {
      headers: new HttpHeaders({
        // Authorization: "Token " + this.token,
        // "Content-Type": "application/json",
        // Accept: "application/json"
      })
    };
    return this.http
      .post<User>(this.globalService.modalurl , payload)
      .pipe();
  }
}
