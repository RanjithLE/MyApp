import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  news:string="all";
  newsData:any={};

  constructor(public data:DataService){}


  getInfo(){
this.data.getNews(this.news).subscribe({
  next:(value:any[])=>{
    console.log(JSON.stringify(value));
this.newsData=value;
  },error:(error:any)=>{
    console.log(error);
  }
})
  }
}
