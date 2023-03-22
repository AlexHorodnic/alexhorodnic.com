import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./modules/home/home.component";
import {PageNotFoundComponent} from "./modules/page-not-found/page-not-found.component";
import {ProjectsComponent} from "./modules/projects/projects.component";
import {AboutComponent} from "./modules/about/about.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
