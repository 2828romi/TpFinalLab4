import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Recipe, User } from 'src/app/core/Models';import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { JrecipeService } from 'src/app/core/services/jrecipe.service';

@Component({
  selector: 'app-favorite-recipe',
  templateUrl: './favorite-recipe.component.html',
  styleUrls: ['./favorite-recipe.component.css'],
})
export class FavoriteRecipeComponent implements OnInit {


constructor(private jsonrecipeServer: JrecipeService, private authService: AuthService) {}

 favoriteRecipe: Array<Recipe>=[];
 user:any


  ngOnInit() {
    this.user = this.authService.getUserById(2);
   
  }


  public getFavoriteRecipeUser(){

  this.user = this.authService.getUserById(2);  //juli.favoRe
 
  this.jsonrecipeServer.getAllFavoriterecipeUser(this.user.favoriteRecipe);

  }


 


}

