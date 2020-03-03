import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./core/app-routing.module";
import { AngularFontAwesomeModule } from "angular-font-awesome";

import { FlexLayoutModule } from "@angular/flex-layout";
import { CustomMaterialModule } from "./core/material.module";
import { FormsModule } from "@angular/forms";
import { NgxMatSelectSearchModule } from "ngx-mat-select-search";
import { ReactiveFormsModule } from "@angular/forms";
import { MatDialogModule, MatSelectModule } from "@angular/material";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { HttpClientModule } from "@angular/common/http";
import { MatCheckboxModule } from "@angular/material/checkbox";

import { GlobalService } from "./app.service";

import { AppState } from "./app-state";
import { DemoComponent } from "./components/demo/demo.component";
import { HomeComponent } from "./components/home/home.component";

// firebase
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from "../environments/environment";
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import * as firebase from 'firebase/app';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';

 var firebaseConfig = {
    apiKey: "AIzaSyB0O1KQS-yX_j1xfXxQGNtx5mPfaGlKzMA",
    authDomain: "cure-demo.firebaseapp.com",
    databaseURL: "https://cure-demo.firebaseio.com",
    projectId: "cure-demo",
    storageBucket: "cure-demo.appspot.com",
    messagingSenderId: "539892362374",
    appId: "1:539892362374:web:125ab781bad923ebd5f507",
    measurementId: "G-JZW9CHKH34"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
@NgModule({
  declarations: [AppComponent, DemoComponent, HomeComponent, LoginComponent, SignupComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    [FlexLayoutModule],
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    CustomMaterialModule,
    NgxMatSelectSearchModule,
    FormsModule,
    MatDialogModule,
    MDBBootstrapModule.forRoot(),
    MatSelectModule,
    MatCheckboxModule,

    // firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule ,// imports firebase/auth, only needed for auth features
    AngularFireDatabaseModule
  ],
  entryComponents: [],
  providers: [AppState],
  bootstrap: [AppComponent]
})
export class AppModule {}
