import { Injectable } from '@angular/core';
import { User } from '../Models';
import { Observable, catchError, lastValueFrom, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: User | null | undefined = null;

  private baseURL = "http://localhost:3000"

  public isLogin: boolean = false;

  constructor(private http: HttpClient) { }


  //*Usuarios
//Verificar usuario 
public getUserToAuth(email:string, password: string): Observable<User[]>{
  return this.http.get<User[]>(`${this.baseURL}/users?email=${email}&password=${password}`);
}

//Obtener todos los usuarios
public getUsers():Observable <User[]> {
  return this.http.get<User[]>(`${this.baseURL}/users`);
}


// Obtener usuario por id
public getUserById(id: number): Observable<User>{
  return this.http.get<User>(`${this.baseURL}/users/${id}`);
}



//Agregar usuario
public addUser(createUser: User): Observable<boolean>{
  const url = `${this.baseURL}/user`;
  return this.http.post<boolean>(url,createUser);
}

// Editar un usuario
public editUser(id: number, updateUser: User): Observable<boolean>{
  const url = `${this.baseURL}/user/${id}`;
  return this.http.put<boolean>(url, updateUser);
}

//Eliminar usuario
public deleteUser(id: number): Observable<boolean>{
  return this.http.delete(`${this.baseURL}/user/${id}`)
  .pipe(
    map(resp => true),
    catchError(errors => of(false))
  );
}


// transforma la rta de la api en un usuario
public getUserNameById(id:number): Observable<string|null>{
  return this.http.get<User>(`${this.baseURL}/users/${id}`).pipe(
    map(user=> user.userName),
    catchError(error=>of(null))
  );
}






  public async login(email: string, password: string): Promise<boolean> {

    
    try {

      let apiResponse = this.getUserToAuth(email, password);

      let userResponse = await lastValueFrom(apiResponse);

      this.user = userResponse[0]; 

      if (this.user) {
        sessionStorage.setItem('token', this.user.id!.toString());
        this.isLogin = true;
      }
    } catch (error) {
      throw error;
    }

    return this.isLogin;
  }

  isLoggedIn(): boolean {
    const userToken = localStorage.getItem('token');
    return userToken !== null;
  }
  
  public saveUser(usuario: any): Observable<any> {
    return this.http.post(this.baseURL+ '/users', usuario);
  
}

logout(): void {
  localStorage.removeItem('token');
  this.isLogin = false;
}



/*
  public addUser(user: User): Promise<User> {

    return new Promise<User>((resolve, reject) => {
      this.apiService.addUser(user).subscribe({

        next: data => resolve(data),
        error: error => reject(error)
      })
    });

  }*/

}
