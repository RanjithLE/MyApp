import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

 isShow:boolean;

  constructor(public  router:Router , public data:DataService){

  }
  
  
  


  doLogout(){
    this.data.isLoading();  
    this.router.navigateByUrl('');
   }
   
}
