import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './core/navbar/navbar.component';
import {HomeComponent} from './modules/home/home.component';
import {PageNotFoundComponent} from './modules/page-not-found/page-not-found.component';
import {FooterComponent} from './core/footer/footer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {ProjectsComponent} from './modules/projects/projects.component';
import {AboutComponent} from './modules/about/about.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTableModule} from "@angular/material/table";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PageNotFoundComponent,
    FooterComponent,
    ProjectsComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
