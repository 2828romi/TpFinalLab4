import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Recipe } from 'src/app/core/Models';
import { JrecipeService } from 'src/app/core/services/jrecipe.service';



@Component({
  selector: 'app-json-recipe',
  templateUrl: './json-recipe.component.html',
  styleUrls: ['./json-recipe.component.css']
})
export class JsonRecipeComponent implements OnInit {

  
  public jrecipe: Array<Recipe>=[];

  constructor(private jrecipeservice: JrecipeService){}
  
  ngOnInit(): void { 
    this.getAllRecipe();
    
  }


  public agregarReceta(){ 

        
   }

   public async getAllRecipe(){
    try{
      let res = this.jrecipeservice.getAllRecepiJson();

      const data = await lastValueFrom(res);
      
      this.jrecipe = data.map((recipeData: any)=> new Recipe(recipeData));

    }catch(error){
      console.error(error);

    }
   }


   
   public async verReceta(id:number){
    try{
      let res = this.jrecipeservice.getJSonRecipeById(id);

      const data = await lastValueFrom(res);
      
      this.jrecipe = data['map']((recipeData: any)=> new Recipe(recipeData));
      

    }catch(error){
      console.error(error);

    }
   }

   }




