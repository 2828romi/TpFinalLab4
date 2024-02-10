import { IComments, IUser, IRecipe } from "./Interfaces";


export class User implements IUser {
  subscribe(arg0: (favRec: number[]) => number[]) {
    throw new Error('Method not implemented.');
  }
  id: number | null;
  userName: string | null;
  email: string | null;
  password: string | null;
  comments: number[] | null;
  favoriteRecipe: number[];
 

  constructor(user?: any) {
    this.id = user.id != null ? user.id : null;
    this.userName = user.userName != null ? user.userName : null;
    this.email = user.email != null ? user.email : null;
    this.password = user.password != null ? user.password : null;
    this.comments = user.comments != null ? user.comments : null;
    this.favoriteRecipe = user.favoriteRecipe != null ? user.favoriteRecipe : null;
  }

  public searchRecipe(id: number){
    let found = false;
    this.favoriteRecipe.forEach((number) => {
        if(number === id){
          found = true;
        }
      }
    )
    return found;
  }
}



export class Recipe implements IRecipe{
  [x: string]: any;
  id: number | null;
  name: string | null;
  instructions: string | null;
  image: string | null;
  url: string | null;
  comments: number[] | null;

  constructor(recipe?:any){
    this.id = recipe.id! = null ? recipe.id : null;
    this.name = recipe.name != null ? recipe.name : null;
    this.instructions = recipe.instructions != null ? recipe.instructions : null;
    this.image = recipe.image != null ? recipe.image : null;
    this.url = recipe.url != null ? recipe.url : null;
    this.comments = recipe.comments != null ? recipe.comments : null;
  }

  
}



  export class Comment implements IComments {
    id:number | null;
    user: number | null;
    recipe: number | null;
    text: string | null;
    constructor(comment? : any) {
      this.id = comment.id! = null ? comment.id : null;
      this.user = comment.user! = null ? comment.user : null;
      this.recipe = comment.recipe! = null ? comment.recipe : null;
      this.text = comment.text! = null ? comment.text : null;
    }
  }



