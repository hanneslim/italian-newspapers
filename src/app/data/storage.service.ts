import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { DisplayNewspaper } from './newspaper-data';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private _storage: Storage) {
    this.init()
  }

  async init() {
    await this._storage.create()
  }

  public setFavourites(favourites: DisplayNewspaper) {
    this._storage.set('favourites', favourites)
  }

  public async getFavourites(): Promise<DisplayNewspaper | { title: 'Preferiti', data: [] }> {
    return await this._storage.get('favourites') || { title: 'Preferiti', data: [] }
  }
}
