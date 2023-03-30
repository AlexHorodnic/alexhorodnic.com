import {Component, OnInit} from '@angular/core';

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
    name: 'WeatherHub - Show Weather statistics by fetching data from a public API',
    languages: 'HTML, CSS, BOOTSTRAP, JAVASCRIPT, API',
    description: 'Project Description',
    img: 'assets/projects/Weatherhub.png',
    features: 'Responsive Design | Contact Form | Sign Up with Paid Subscription',
    demo: 'https://weatherhub.alexhorodnic.com/',
    code: 'https://github.com/AlexHorodnic/weatherhub'
  },
  {
    name: 'CarBrandCentral -  A responsive single page application',
    languages: 'HTML, CSS, BOOTSTRAP, JAVASCRIPT',
    description: 'Project Description',
    img: 'assets/projects/CarBrandCentral.jpg',
    features: 'Photo and Video preview | Contact Form | Subscription Method',
    demo: 'https://carbrandcentral.alexhorodnic.com/',
    code: 'https://github.com/AlexHorodnic/carbrandcentral'
  },
];

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  dataSource = ELEMENT_DATA;

  constructor() {
  }

  ngOnInit(): void {
  }

}

