import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JsonRecipeComponent } from './components/json-recipe/json-recipe.component';
import { FavoriteRecipeComponent } from './components/favorite-recipe/favorite-recipe.component';
import { RecipeViewComponent } from './components/recipe-view/recipe-view.component';

const routes: Routes = [

  {
    path:'jrecipe',
    component: JsonRecipeComponent
  },

  {
    path:'favorite',
    component: FavoriteRecipeComponent
  },
  {
    path:'viewRecipe',
    component: RecipeViewComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JrecipeRoutingModule { }
