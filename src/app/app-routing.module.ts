import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./modules/home/home.component";
import {PageNotFoundComponent} from "./modules/page-not-found/page-not-found.component";
import {ProjectsComponent} from "./modules/projects/projects.component";
import {AboutComponent} from "./modules/about/about.component";
import {ContactComponent} from "./modules/contact/contact.component";

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'projects', component: ProjectsComponent },
  {path: 'about', component: AboutComponent },
  {path: 'contact', component: ContactComponent },
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
