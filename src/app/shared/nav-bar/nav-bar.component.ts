import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/core/services/search.service';

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

  goFavoriteJsonRecipe(){
    this.router.navigate(['jrecipe']);

  }

}
