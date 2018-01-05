import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  public getToken(): string {
    return localStorage.getItem('djapp-token');
  }

  public setToken(token: string) {
    return localStorage.setItem('djapp-token', token);
  }

  public removeToken() {
    return localStorage.removeItem('djapp-token');
  }

  public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();
    // return a boolean reflecting 
    // whether or not the token is expired
    return !!token;
  }

}