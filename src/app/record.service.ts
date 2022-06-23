import { Injectable } from "@angular/core";
// best way to register a service to be available throughout the app.

@Injectable({
  providedIn: 'root',
})
export class RecordService {

  // this is where i might make an api call to have dynamic "records" instead of this list

  records = [
    {
      id: 1,
      title: '30',
      artist: 'Adele',
      genre: 'pop',
      isOpened: true,
      lastHeard: '12/03/2021',
      isFavorite: false,
    },
    {
      id: 2,
      title: 'Purple Rain',
      artist: 'Prince and the Revolution',
      genre: 'pop',
      isOpened: false,
      lastHeard: '',
      isFavorite: true,
    },
    {
      id: 3,
      title: 'Thriller',
      artist: 'Michael Jackson',
      genre: 'pop',
      isOpened: true,
      lastHeard: '08/15/2021',
      isFavorite: false,
    },
    {
      id: 4,
      title: 'The Wall',
      artist: 'Pink Floyd',
      genre: 'rock',
      isOpened: true,
      lastHeard: '12/03/2021',
      isFavorite: true,
    },
    {
      id: 5,
      title: 'Rumours',
      artist: 'Fleetwood Mac',
      genre: 'pop',
      isOpened: false,
      lastHeard: '',
      isFavorite: false,
    },
    {
      id: 6,
      title: 'the carter',
      artist: 'lil wayne',
      genre: 'hip-hop',
      isOpened: false,
      lastHeard: '12/03/2021',
      isFavorite: true,
    },
  ];

  get() {
    return this.records
  }

  add(singleRecord: any) {
    this.records.push(singleRecord);
  }

  delete(singleRecord: any) {
    const index = this.records.indexOf(singleRecord);
    if (index >= 0) {
      this.records.splice(index, 1);
    }
  }
}