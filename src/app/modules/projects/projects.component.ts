import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  languages: string;
  description: string;
  img: string;
  features: string;
  demo: string;
  code: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    name: 'Employee Management - Simple Fullstack CRUD Application',
    languages: 'HTML, CSS, BOOTSTRAP, JS, JAVA, MYSQL, DATABASE',
    description: 'Project Description',
    img: 'assets/projects/employee-management.png',
    features: 'Photo and Video preview | Contact Form | Subscription Method',
    demo: 'https://employee-management-system.alexhorodnic.com/',
    code: 'https://github.com/AlexHorodnic/employee-mngmt-fullstack',
  },
  {
    name: 'WeatherHub - Show Weather statistics by fetching public API data',
    languages: 'HTML, CSS, BOOTSTRAP, JS, API',
    description: 'Project Description',
    img: 'assets/projects/Weatherhub.png',
    features:
      'Responsive Design | Contact Form | Sign Up with Paid Subscription',
    demo: 'https://weatherhub.alexhorodnic.com/',
    code: 'https://github.com/AlexHorodnic/weatherhub',
  },
  {
    name: 'CarBrandCentral -  A responsive single page application',
    languages: 'HTML, CSS, BOOTSTRAP, JS',
    description: 'Project Description',
    img: 'assets/projects/CarBrandCentral.jpg',
    features: 'Photo and Video preview | Contact Form | Subscription Method',
    demo: 'https://carbrandcentral.alexhorodnic.com/',
    code: 'https://github.com/AlexHorodnic/carbrandcentral',
  },
];

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  dataSource = ELEMENT_DATA;

  constructor() {}

  ngOnInit(): void {}
}
