import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DataComponent } from './data/data.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
{
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
},  
{
  path: 'home',
  component: HomeComponent
},
{
    path: 'about-us',
    component: AboutUsComponent
},
{
    path: 'blog',
    component: BlogComponent
}
];
@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), NgbModule, HttpClientModule],
  declarations: [ AppComponent, AboutUsComponent, DataComponent, HomeComponent, BlogComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
  
}
