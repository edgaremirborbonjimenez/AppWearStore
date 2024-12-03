import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root'
})
export class Auth0Service {

  constructor(private readonly _auth:AuthService){
  }

  async login(){
    const result = this._auth.loginWithPopup()

    

  }

}
