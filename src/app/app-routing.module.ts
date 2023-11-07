import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { LandingPageComponent } from './modules/landing/components/landing-page/landing-page.component';
import { Error404Component } from './shared/error404/error404.component';
import { ComponentsComponent } from './modules/carousel/components/components.component';
import { RecipeSearchComponent } from './modules/recipe/components/recipe-search/recipe-search.component';
const routes: Routes = [

  {
    path: 'nav-bar',
    component: NavBarComponent
  },
  {
    path:'landing',
    component: LandingPageComponent,
    loadChildren:()=> import("./modules/landing/landing.module").then(m => m.LandingModule)  
 },
 {
  path: 'auth',
  loadChildren:() => import("./modules/auth/auth.module").then(m =>m.AuthModule)

 },
 {
  path: 'search', 
  component: RecipeSearchComponent
},  

 {
  path: '404',
  component: Error404Component
 },
 {
  path: 'carousel',
  component: ComponentsComponent
 },

 {
  path:'',
  redirectTo: 'landing',
  pathMatch:'full'
 },
 {
  path:'**',
  component:Error404Component
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
