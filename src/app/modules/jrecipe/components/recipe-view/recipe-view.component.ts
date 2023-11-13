import { Component, OnInit } from '@angular/core';

import { Recipe } from 'src/app/core/Models';

import { JrecipeService } from 'src/app/core/services/jrecipe.service';

@Component({
  selector: 'app-recipe-view',
  templateUrl: './recipe-view.component.html',
  styleUrls: ['./recipe-view.component.css']
})
export class RecipeViewComponent implements OnInit{

  jsonrecipe!: Recipe;

  constructor(private jrecipeServer: JrecipeService){}

  ngOnInit(): void {
   
  }



  public getRecipe(id:number){
 
  }

}


















/*

   this.activatedRoute.params.subscribe(({id}) => {
      this.jrecipeserver.getJSonRecipeById(id).subscribe(res => {
        this.jsonrecipe = res;
        console.log(this.jsonrecipe);
      } )
    } )
*/