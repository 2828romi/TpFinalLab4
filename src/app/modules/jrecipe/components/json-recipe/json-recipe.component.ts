import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Recipe, User, Comment } from 'src/app/core/Models';
import { AuthService } from 'src/app/core/services/auth.service';
import { JrecipeService } from 'src/app/core/services/jrecipe.service';
import { userService } from 'src/app/core/services/user.service';



@Component({
  selector: 'app-json-recipe',
  templateUrl: './json-recipe.component.html',
  styleUrls: ['./json-recipe.component.css']
})
export class JsonRecipeComponent implements OnInit {

  
  recipes: Array<Recipe>=[];
  comments: Array<Comment> = [];

  @Output() taskToUpdate: EventEmitter<Recipe> = new EventEmitter();


  constructor(private jrecipeservice: JrecipeService, private userService: userService){}
  
  users: Array<User> = [];
  

  ngOnInit(): void { 

    this.getAllRecipe();
    
  }


  public addRecipe(recipe: Recipe) {
    this.userService.getUsers().then(data => this.users = data);
    for(let i = 0; i < this.users.length; i++){
      if(this.users[i].id == sessionStorage.getItem("token")){
        if(this.searchRecipeInUser(this.users[i], Number(recipe.id)) != true){
          this.users[i].favoriteRecipe.push(Number(recipe.id));
          this.userService.updateUser(this.users[i]);
          console.log(this.users[i]);
        } else{
          this.users[i].favoriteRecipe.splice(Number(recipe.id));
          this.userService.updateUser(this.users[i]);
          console.log(this.users[i]);
        }
      }
    }
  }

   public async getAllRecipe(){
    this.jrecipeservice.getRecipes().then(data => this.recipes = data);
    this.jrecipeservice.getComment().then(data => this.comments = data);
    
   }

   public searchRecipeInUser(user: User, idRecipe: number){
      for(let i = 0; i < user.favoriteRecipe.length; i++){
        if(user.favoriteRecipe[i] == idRecipe){
          return true;
        }
      }
      return false;
   }


   
   /*public async verReceta(id:number){
    try{
      let res = this.jrecipeservice.getJSonRecipeById(id);

      const data = await lastValueFrom(res);
      
      this.jrecipe = data['map']((recipeData: any)=> new Recipe(recipeData));
      

    }catch(error){
      console.error(error);

    }
   }*/

   }




