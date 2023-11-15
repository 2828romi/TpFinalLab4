import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  isLoggedIn = false; 
  username = '';
  @Input() dataInput:any;

  constructor(private router: Router) {}
  
  ngOnInit(): void {
    
  }

  goLogin(){
    this.router.navigate(['auth']);
  }

  goSearch(){
    this.router.navigate(['search']);
  }

  goFavoriteRecipe(){
    this.router.navigate(['recipejason/favorite']);
  }

}
