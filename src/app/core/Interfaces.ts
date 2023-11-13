export interface IUser {
    id: number;
    userName: string;
    email: string;
    password: string;
    comments: number[];
    favoriteRecipe: number[];
  }

  export interface IRecipe{
    id: number;
    name:string;
    instructions:string;
    image:string;
    comments: number[];
  }

  export interface IComments{
    id: number;
    users: number[];
    text: string;

  }

  
  
