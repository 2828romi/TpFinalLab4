import { IComments, IUser, IRecipe } from "./Interfaces";


export class User implements IUser {
  subscribe(arg0: (favRec: number[]) => number[]) {
    throw new Error('Method not implemented.');
  }
  id: number;
  userName: string;
  email: string;
  password: string;
  comments: number[];
  favoriteRecipe: number[];
 

  constructor(user?: any) {
    this.id = user.id != null ? user.id : null;
    this.userName = user.userName != null ? user.userName : null;
    this.email = user.email != null ? user.email : null;
    this.password = user.password != null ? user.password : null;
    this.comments = user.comments != null ? user.comments : null;
    this.favoriteRecipe = user.favoriteRecipe != null ? user.favoriteRecipe : null;
  }
}



export class Recipe implements IRecipe{
  [x: string]: any;
  id: number;
  name: string;
  instructions: string;
  image: string;
  comments: number[];

  constructor(recipe?:any){
    this.id = recipe.id! = null ? recipe.id : null;
    this.name = recipe.name != null ? recipe.name : null;
    this.instructions = recipe.instructions != null ? recipe.instructions : null;
    this.image = recipe.image != null ? recipe.image : null;
    this.comments = recipe.comments != null ? recipe.comments : null;
  }
}



  export class Comment implements IComments {
    id:number;
    users: number[];
    text: string;
    constructor(comment? : any) {
      this.id = comment.id! = null ? comment.id : null;
      this.users = comment.user! = null ? comment.user : null;
      this.text = comment.text! = null ? comment.text : null;
    }
  }



