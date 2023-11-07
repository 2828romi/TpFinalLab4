import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipePageComponent } from './components/recipe-page/recipe-page.component';
import { RecipeSearchComponent } from './components/recipe-search/recipe-search.component';


@NgModule({
  declarations: [
    RecipePageComponent,
    RecipeSearchComponent
  ],
  imports: [
    CommonModule,
    RecipeRoutingModule
  ],
  exports: [
    RecipePageComponent
  ]
})
export class RecipeModule { }
