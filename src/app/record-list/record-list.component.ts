import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.scss'],
})
export class RecordListComponent implements OnInit {
  mediaItems = [
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

  onSingleRecordDelete(singleRecord: any) {
    console.log('hi');
  }

  constructor() {}

  ngOnInit(): void {}
}
