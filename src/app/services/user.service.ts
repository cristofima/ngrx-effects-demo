import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL = "https://reqres.in/api";

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(`${this.URL}/users`)
      .pipe(
        map((res: any) => res["data"] as User[])
      );
  }

  getUserById(id: number){
    return this.http.get(`${this.URL}/users/${id}`)
      .pipe(
        map((res: any) => res["data"] as User)
      );
  }
}
