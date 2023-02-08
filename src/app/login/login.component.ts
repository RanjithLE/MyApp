import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  fd:string;
  userData:any[]=[];
 
  constructor(public router:Router , public userSer: DataService){

  }
  
  doLogin(form:any){
    console.log(form.value)
    this.userSer.isLoading();
    this.userSer.getUsername().subscribe({
      next:(value:any[])=>{
        console.log(value);



        value.filter((obj) =>{
          if(obj.username===form.value.username){
            this.router.navigateByUrl('/weather');
           
          }else{
            this.fd="Invalid User";
          }
        })

         
      },
      error:(error:any)=>{
        console.log(error);
      }
    });
  }
  
}


/* value.filter(d=>
      d.username==form.value.username&& d.password==form.value.password)*/