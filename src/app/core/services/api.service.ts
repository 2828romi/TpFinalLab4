import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, catchError, map, of} from "rxjs"
import {  User } from '../Models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private baseURL = "http://localhost:3000"
  post: any;

  constructor(private http: HttpClient) { /* Acá hago las peticiones*/  }

public getUserToAuth(email:string, password: string): Observable<User[]>{
  return this.http.get<User[]>(`${this.baseURL}/users?email=${email}&password=${password}`);
}

// transforma la rta de la api en un usuario
public getUserNameById(id:number): Observable<string|null>{
  return this.http.get<User>(`${this.baseURL}/users/${id}`).pipe(
    map(user=> user.userName),
    catchError(error=>of(null))
  );
}


//* Agregar un usuario
public addUser(user: User): Observable<User> {
  return this.http.post<User>(`${this.baseURL}/user`, user);
}
}
