import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = "http://localhost:5055/api/account/";
  constructor(private http: HttpClient) { }

  login(loginObj: any){
    return this.http.post<any>(`${this.baseUrl}authenticate`, loginObj)
  }

  logout(){

  }

  register(){

  }
}
