import { Injectable } from "@angular/core"
import { HttpClient } from '@angular/common/http'
import { Observable, tap } from "rxjs"

import { IUser, IFBResponse } from '../interfaces/auth.interface';
import { environment } from "src/environments/environment"

@Injectable({ providedIn: "root" })

export class AuthService {
  get token(): string | null {
    const storedExpDate = localStorage.getItem('token-exp');
    const expDate = storedExpDate ? new Date(storedExpDate) : null;

    if (expDate && (new Date() > expDate)) {
      this.logout()
      return null
    }
    return localStorage.getItem('token')
  }

  constructor(private http: HttpClient) {}


  login(user: IUser): Observable<IFBResponse> {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseConfig.apiKey}`
    return this.http.post<IFBResponse>(url, user).pipe(
      tap(response => this.setToken(response))
    )
  }

  logout() {
    this.setToken(null)
  }

  isAuthenticated(): boolean {
    return !!this.token
  }

  private setToken(response: IFBResponse | null) {
    console.log('response', response);
    if (response) {
      const expDate = new Date(new Date().getTime() + +response.expiresIn * 1000)
      localStorage.setItem('token', response.idToken)
      localStorage.setItem('token-exp', expDate.toString())
    } else {
      localStorage.clear()
    }
  }
}
