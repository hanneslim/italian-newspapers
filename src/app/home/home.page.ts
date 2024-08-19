import { Component, inject, OnInit } from '@angular/core';
import { cultureAndArt, DisplayNewspaper, fashion, general, Newspaper, politicsAndEconomy, regional, sport } from '../data/newspaper-data';
import { Browser } from '@capacitor/browser';
import { remove } from 'lodash';
import { StorageService } from '../data/storage.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  private _storageService = inject(StorageService)


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

  public async ngOnInit() {
    this.favourites = await this._storageService.getFavourites()
  }


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
    if (this.favourites.data.some((np) => np.id === paper.id)) {
      return
    }
    this.favourites.data.push(paper)
    this._storageService.setFavourites(this.favourites)

  }

  public deleteFromFavourites(paper: Newspaper) {
    remove(this.favourites.data, (data) => data.id === paper.id)
    this._storageService.setFavourites(this.favourites)
  }

  isFavourite(paper: Newspaper): boolean {
    return this.favourites.data.some((np) => np.id === paper.id);
  }

}
