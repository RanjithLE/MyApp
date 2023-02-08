import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  isCreate:boolean=false;
  

  constructor(public http:HttpClient) { }

  isLoading(){
  this.isCreate=!this.isCreate;

  }

  getUsername(){
  return  this.http.get<any[]>('assets/user.json');
  }
  getWeatherDeatails(city:string){
    let queryParams = new HttpParams();
    queryParams = queryParams.append("q", city);
    queryParams = queryParams.append("appid", "3a3eb62e70b9745f96cb7c04245a9cb8");
    return this.http.get<any>('http://api.openweathermap.org/data/2.5/weather',{
      params: queryParams })
}

getNews(data:string){
  let queryParams = new HttpParams();
  queryParams = queryParams.append("country", "IN");
  queryParams = queryParams.append("apiKey", "408b4153b994422d8638da72f2d3ac5b");
  queryParams = queryParams.append("category", data);

 return this.http.get<any[]>('https://newsapi.org/v2/top-headlines',{
  params:queryParams
 })
}
}