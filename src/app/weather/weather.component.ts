import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {

  city:string='';
  weatherData:any={};
  place='';

  constructor(public data:DataService){

  }


  doSearch(){
  this.data.getWeatherDeatails(this.city).subscribe({
    next:(data:any)=>{
      console.log(JSON.stringify(data));
    
    this.weatherData=data;
    
    },
    error:(error:any)=>{
      console.log(error);
    }
  })
  }

}
