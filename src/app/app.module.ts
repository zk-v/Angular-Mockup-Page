import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutUsComponent } from './about/about-us.component';
import { DataComponent } from './data/data.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { ContactUsComponent } from './contact/contact-us.component';
import { GalleryComponent } from './gallery/gallery.component';

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
    path: 'blog',
    component: BlogComponent
},
{
    path: 'gallery',
    component: GalleryComponent
},
{
    path: 'about',
    component: AboutUsComponent
},
{
    path: 'contact',
    component: ContactUsComponent
}
];
@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), NgbModule, HttpClientModule],
  declarations: [ AppComponent, AboutUsComponent, DataComponent, HomeComponent, BlogComponent, FooterComponent, JumbotronComponent, ContactUsComponent, GalleryComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
  
}
