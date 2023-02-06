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
    name: 'WeatherHub - Show Weather statistics by fetching data from a public API',
    languages: 'HTML, CSS, BOOTSTRAP, JAVASCRIPT, API',
    description: 'Project Description',
    img:'../../../assets/projects/Weatherhub.png',
    features: 'Responsive Design | Contact Form | Sign Up with Paid Subscription',
    demo: 'https://alexhorodnic.github.io/weatherhub/',
    code: 'https://github.com/AlexHorodnic/weatherhub'
  },
  {
    name: 'A responsive single page application',
    languages: 'HTML, CSS, BOOTSTRAP',
    description: 'Project Description',
    img:'',
    features: 'Photo and Video preview | Contact Form | Subscription Method',
    demo: '../projects/demo-projects/lamia/',
    code: 'https://github.com/AlexHorodnic/MunicipalityOfLamia'
  },
  {
    name: 'Friends and Contacts Platform',
    languages: 'HTML, CSS, BOOTSTRAP',
    description: 'Project Description',
    img:'',
    features: 'Login / Register Form | Responsive Design',
    demo: 'https://alexhorodnic.com/projects/friendscontacts/index.html',
    code: 'https://github.com/AlexHorodnic/FriendsContacts'
  },
];

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}

