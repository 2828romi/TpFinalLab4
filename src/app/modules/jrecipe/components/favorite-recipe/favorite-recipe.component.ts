import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Recipe, User } from 'src/app/core/Models';import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { JrecipeService } from 'src/app/core/services/jrecipe.service';
import { JsonService } from 'src/app/core/services/json.service';
import { userService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-favorite-recipe',
  templateUrl: './favorite-recipe.component.html',
  styleUrls: ['./favorite-recipe.component.css'],
})
export class FavoriteRecipeComponent implements OnInit {


constructor(private jsonrecipeServer: JrecipeService, private userService: userService, private jsonService: JsonService) {}

 favoriteRecipe: Array<Number>=[];
 recipeToShow: Array<Recipe> = [];
 users: Array<User> = [];



  ngOnInit() {
    this.completeData();
    console.log(this.jsonrecipeServer.getRecipeById(5));
  }

  completeData() {
    this.userService.getUsers().then(data => this.users = data);
    for(let i = 0; i < this.users.length; i++){
      if(this.users[i].id == sessionStorage.getItem("token")){
        this.favoriteRecipe = this.users[i].favoriteRecipe;
      }
    }
  }

  

  private getRecipe(id: number){
    let recipe : Recipe;
    return this.jsonrecipeServer.getRecipeById(id).then(data => recipe = data);
  }


  

 


}

