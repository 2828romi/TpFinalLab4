import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.css']
})
export class RecipeSearchComponent implements OnInit{
  
  data: any = {};
  
  constructor(private apiService: ApiService) {

  }

  ngOnInit(): void {
    this.searchByName();
  }

  searchByName(){
    this.apiService.getRecipeByName("pasta").subscribe(
      data => {
        this.data = data;
        console.log(data);
      }
    )
  }

}
