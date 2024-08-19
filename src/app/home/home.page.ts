import { Component } from '@angular/core';
import { cultureAndArt, fashion, general, politicsAndEconomy, regional, sport } from '../data/newspaper-data';
import { Browser } from '@capacitor/browser';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  private readonly _allNewspapers = [
    { title: 'Generale', data: general },
    { title: 'Politica ed economia', data: politicsAndEconomy },
    { title: 'Sport', data: sport },
    { title: 'Regionale', data: regional },
    { title: 'Arte e cultura', data: cultureAndArt },
    { title: 'Moda', data: fashion },
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

  public async openLink(link: string) {
    await Browser.open({ url: 'http://' + link });
  };

}
