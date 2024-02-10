export interface IUser {
    id: number | null;
    userName: string | null;
    email: string | null;
    password: string | null;
    comments: number[] | null;
    favoriteRecipe: number[] | null;
  }

  export interface IRecipe{
    id: number | null;
    name:string | null;
    instructions:string | null; 
    image:string | null;
    url: string | null;
    comments: number[] | null;
  }

  export interface IComments{
    id: number | null;
    user: number | null ;
    recipe: number | null ;
    text: string | null; 

  }

  
  
