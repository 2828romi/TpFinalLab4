import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, catchError, map, of} from "rxjs"
import { Recipe, User} from '../Models';

@Injectable({
  providedIn: 'root'
})
export class JrecipeService {
  private baseURL = "http://localhost:3000"

  constructor(private http: HttpClient) { }
  user = User


  //* Recetas del JSON


  //Todas las recetas json
  public getAllRecepiJson() : Observable<Recipe[]>
  {
     return this.http.get<Recipe[]>(`${this.baseURL}/recipe`);
  }

 //Recetas favoritas
  public getAllFavoriterecipeUser(favoriteRecipe: Array<number>){

     favoriteRecipe.forEach(recipe => {
      this.http.get<Recipe>(`${this.baseURL}/recipe/${recipe}`);
    }); 
   
  }



  // Obtener receta por id
  public getJSonRecipeById(id: number): Observable<Recipe>{
    return this.http.get<Recipe>(`${this.baseURL}/recipe/${id}`);
    }



//Agregar receta favorita
public addRecipeFavorite(createRecipe: Recipe): Observable<boolean>{
  const url = `${this.baseURL}/recipe`;
  return this.http.post<boolean>(url,createRecipe);
}

// Editar receta ?????
public editRecipeFavorite(id: number, updateRecipe: Recipe): Observable<boolean>{
  const url = `${this.baseURL}/recipe/${id}`;
  return this.http.put<boolean>(url, updateRecipe);
}

//Eliminar receta favorita
public deleteRecipeFavorite(id: number): Observable<boolean>{
  return this.http.delete(`${this.baseURL}/recipe/${id}`)
  .pipe(
    map(resp => true),
    catchError(errors => of(false))
  );
}



}


