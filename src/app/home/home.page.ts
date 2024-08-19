import { Component, inject } from '@angular/core';
import { cultureAndArt, fashion, general, Newspaper, politicsAndEconomy, regional, sport } from '../data/newspaper-data';
import { Browser } from '@capacitor/browser';
import { remove } from 'lodash';

type DisplayNewspaper = {
  title: string,
  data: Newspaper[]
}


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public readonly allNewspapers = [
    { title: 'Generale', data: general },
    { title: 'Politica ed economia', data: politicsAndEconomy },
    { title: 'Sport', data: sport },
    { title: 'Regionale', data: regional },
    { title: 'Arte e cultura', data: cultureAndArt },
    { title: 'Moda', data: fashion },
  ];

  public filteredNewspapers: DisplayNewspaper[] = []

  public favourites: DisplayNewspaper = { title: 'Preferiti', data: [] }


  public filterNewspapers(inputValue: string | null | undefined) {
    if (!inputValue) {
      this.filteredNewspapers = []
      return
    }
    this.filteredNewspapers = this.allNewspapers.map(np => {
      return {
        ...np, data: np.data.filter(
          npData => npData.label.toLowerCase().includes(inputValue.toLowerCase()))
      }

    }).filter(np => np.data.length)
  }

  public async openLink(link: string) {
    await Browser.open({ url: 'http://' + link });
  };

  public addToFavourites(paper: Newspaper) {
    if (this.favourites.data.includes(paper)) {
      return
    }
    this.favourites.data.push(paper)
  }

  public deleteFromFavourites(paper: Newspaper) {
    remove(this.favourites.data, (data) => data === paper)
  }

}
