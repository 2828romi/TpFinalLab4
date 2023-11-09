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


private urlApi = "https://api.spoonacular.com";
//2dbadc99b6614671a501ba30279bf4e0
//391966feb6814c65bac7d599129dde32
//95a12199154f4f1485344216838d6e97
  private apiKey = "apiKey=95a12199154f4f1485344216838d6e97";

  public getRecipeById(id: number): Observable<any>{
    return this.http.get<any>(this.urlApi + `/recipes/${id}/information?` + this.apiKey);
  }

  public getRecipeByName(name: string): Observable<any>{
    return this.http.get<any>(this.urlApi + `/recipes/complexSearch?query=${name}&` + this.apiKey);
  }
}