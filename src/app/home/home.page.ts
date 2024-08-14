import { Component, inject } from '@angular/core';
import { general, politics, sport } from '../data/newspaper-data';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private readonly iab = inject(InAppBrowser)

  private readonly _allNewspapers = [
    { title: 'Allgemein', data: general },
    { title: 'Politik und Wirtschaft', data: politics },
    { title: 'Sport', data: sport },
  ];

  public filteredNewspapers = this._allNewspapers;


  public filterNewspapers(inputValue: string | null | undefined) {
    if (!inputValue) {
      this.filteredNewspapers = this._allNewspapers
      return
    }
    this.filteredNewspapers = this._allNewspapers.map(np => {
      return {
        ...np, data: np.data.filter(
          npData => npData.label.toLowerCase().includes(inputValue.toLowerCase()))
      }

    }).filter(np => np.data.length)
  }

  public openLink(link: string) {
    this.iab.create('https://' + link, '_self', {
      location: 'no',
      toolbar: 'yes'
    });
  };

}
