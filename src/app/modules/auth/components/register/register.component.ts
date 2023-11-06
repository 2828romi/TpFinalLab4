import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/core/Models';
import { ApiService } from 'src/app/core/services/api.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit{

  //public formValue: User = new User({id:null});

  public userReg: User = new User({id:null});

  constructor(private formB: FormBuilder, public apiService: ApiService){}
  
  ngOnInit(): void { }


   @Output() public onNewUser: EventEmitter<User>= new EventEmitter();

  
  public userForm: FormGroup= this.formB.group({
    userName: new FormControl('', [Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.min(8), Validators.maxLength(10)]),
  });
 
  public onSubmit() {
    this.userReg.userName = this.userForm.value.userName;
    this.userReg.email = this.userForm.value.email;
    this.userReg.password = this.userForm.value.password;

   // this.emitCharacter();
   this.saveUser();
    console.log(this.userReg)
  }

  public saveUser(){
   
  }





  public emitCharacter() {
  this.onNewUser.emit(this.userReg);
  
    
  }          
  

/*
  onSubmit(formValue: any){
    this.saveUser(formValue)
  }

  
 public saveUser(user: User){
    this.apiService.post('/data/db.json', user).subscribe(
      (response: any) => {console.log('Usuario guardado',response);},
      (error: any) => {console.log('Error al guardar', error);}
    );   
    
    return console.log(user);

  }
*/



}