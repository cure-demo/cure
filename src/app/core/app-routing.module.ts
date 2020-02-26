import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DemoComponent } from "../components/demo/demo.component";
import { HomeComponent } from "../components/home/home.component";
import { LoginComponent } from '../components/login/login.component';
import { SignupComponent } from '../components/signup/signup.component';


const routes: Routes = [
  // { path: "", component: IntroPageComponent },
  // { path: "login", component: LoginPageComponent },
  // { path: "register", component: RegisterComponent },
  // { path: "home", component: HomePageComponent }
  // { path: 'demo', component: DemoComponent },
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
