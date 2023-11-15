import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JrecipeRoutingModule } from './jrecipe-routing.module';
import { JsonRecipeComponent } from './components/json-recipe/json-recipe.component';
import { FavoriteRecipeComponent } from './components/favorite-recipe/favorite-recipe.component';
import { RecipeViewComponent } from './components/recipe-view/recipe-view.component';
import { SharedModule } from "../../shared/shared.module";


@NgModule({
    declarations: [
        JsonRecipeComponent,
        FavoriteRecipeComponent,
        RecipeViewComponent
    ],
    exports: [
        JsonRecipeComponent,
        FavoriteRecipeComponent,
        RecipeViewComponent
    ],
    imports: [
        CommonModule,
        JrecipeRoutingModule,
        SharedModule
    ]
})
export class JrecipeModule { }
