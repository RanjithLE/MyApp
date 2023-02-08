import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'weather', component:WeatherComponent},
  {path:'news', component:NewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
