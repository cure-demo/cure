import { Injectable } from '@angular/core';
import { environment } from '../../src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public baseUrl = environment.environmentUrl;
  // public Login = this.base_url + "api/v1/login/";

  // Urls for Projects
  public modalurl = this.baseUrl;
  constructor() {}
}
