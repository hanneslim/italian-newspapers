import { Component } from '@angular/core';
import { general, politics, sport } from '../data/newspaper-data';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public readonly newspapers = [
    { title: 'Politik und Wirtschaft', data: politics },
    { title: 'Allgemein', data: general },
    { title: 'Sport', data: sport },
  ];


}
