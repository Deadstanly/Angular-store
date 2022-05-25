import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user";
import {environment} from "../../environments/environment";
import {Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  public setToken(response) {
    if (response) {
      const expData = new Date(new Date().getTime() + +response.expiresIn * 1000);
      localStorage.setItem('fb-token-exp', expData.toString())
      localStorage.setItem('fb-token', response.idToken)
    } else {
      localStorage.clear()
    }
  }

  public get token() {
    const expDate = new Date(localStorage.getItem('fb-token-exp'));
    if (new Date > expDate) {
      this.logout();
      return null;
    }
    return localStorage.getItem('fb-token')
  }

  public login(user: User): Observable<User> {
    return this.http.post<User>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user).pipe(
      tap(this.setToken)
    )
  }

  public logout() {
    this.setToken(null)
  }

  public isAuth() {
    return !!this.token
  }


}
