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
    name: 'Restaurant and Food Delivery',
    languages: 'HTML, CSS, BOOTSTRAP',
    description: 'Project Description',
    img:'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
    features: 'Responsive Design | Contact Form | Sign Up with Paid Subscription',
    demo: 'https://alexhorodnic.com/projects/food/index.html',
    code: 'https://github.com/AlexHorodnic/FriendsContacts'
  },
  {
    name: 'Municipality of Lamia',
    languages: 'HTML, CSS, BOOTSTRAP',
    description: 'Project Description',
    img:'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
    features: 'Photo and Video preview | Contact Form | Subscription Method',
    demo: 'https://alexhorodnic.com/projects/municipality/index.html',
    code: 'https://github.com/AlexHorodnic/MunicipalityOfLamia'
  },
  {
    name: 'Friends and Contacts Platform',
    languages: 'HTML, CSS, BOOTSTRAP',
    description: 'Project Description',
    img:'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
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

