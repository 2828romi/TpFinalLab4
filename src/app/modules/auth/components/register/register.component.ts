import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/core/Models';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { userService } from 'src/app/core/services/user.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit{

  

  public userReg: User = new User({});
  users: Array<User> = [];

  constructor(private userService: userService, private formB: FormBuilder, public apiService:
     ApiService, private authService: AuthService,private router: Router){}
  
  ngOnInit(): void {
    this.getUsers();
    
   }


   @Output() public onNewUser: EventEmitter<User>= new EventEmitter();

   getUsers(){
    this.userService.getUsers().then(data => this.users = data);
   }
  
  public userForm: FormGroup= this.formB.group({
    userName: new FormControl('', [Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.min(8), Validators.maxLength(10)]),
  });
 
  public onSubmit() {
    this.userReg.id = this.getLastId();
    this.userReg.userName = this.userForm.value.userName;
    this.userReg.email = this.userForm.value.email;
    this.userReg.password = this.userForm.value.password;
    console.log(this.getLastId());
    this.emitCharacter();

   this.authService.saveUser(this.userReg).subscribe(response=> {
    this.userForm.reset();
    this.router.navigate(['auth/login']);

   },error =>{
    console.log('error');
   } )
    console.log(this.userReg)
  }


  private getLastId(){
    
    let lastId = 1;
    for(let item of this.users){
      lastId++;
    }
    return lastId;
  }



  public emitCharacter() {
  this.onNewUser.emit(this.userReg);
  
    
  }          

}