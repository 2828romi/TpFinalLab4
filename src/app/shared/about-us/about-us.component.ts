import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  isLoggedIn = false; 

  ngOnInit(): void {
    this.isLoggedIn = this.authSrevice.isLoggedIn();
    console.log(this.isLoggedIn);
      
  }

  constructor(private router: Router, private authSrevice: AuthService ){}

  public goRegister(){
    this.router.navigate(['/auth/register'])
  }

}
