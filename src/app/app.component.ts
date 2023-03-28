import { Component } from '@angular/core';
import { NavigationEnd, Router } from "@angular/router";
interface RouteToTitleMap {
  [key: string]: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updatePageTitle();
      }
    });
  }

  routeToTitle: RouteToTitleMap = {
    '': 'Home',
    'projects': 'Projects',
    'about': 'About',
    '**': 'Page Not Found'
  };
  updatePageTitle() {
    const currentRoute = window.location.pathname.split('/')[1];
    const pageTitle = this.routeToTitle[currentRoute] || 'Page Not Found';
    document.title = `Alex Horodnic - ${pageTitle}`;
  }
}
