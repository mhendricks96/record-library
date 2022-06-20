import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.scss']
})
export class RecordListComponent implements OnInit {

  mediaItems = [
    {
      id: 1,
      title: '30',
      artist: 'Adele',
      genre: 'Pop',
      isOpened: true,
      lastHeard: '12/03/2021'
    },
    {
      id: 2,
      title: 'Purple Rain',
      artist: 'Prince',
      genre: 'Pop',
      isOpened: false,
      lastHeard: ''
    },
    {
      id: 3,
      title: 'Thriller',
      artist: 'Michael Jackson',
      genre: 'Pop',
      isOpened: true,
      lastHeard: '08/15/2021'
    },
    {
      id: 4,
      title: 'The Wall',
      artist: 'Pink Floyd',
      genre: 'Rock',
      isOpened: true,
      lastHeard: '12/03/2021'
    },
    {
      id: 5,
      title: 'Rumours',
      artist: 'Fleetwood Mac',
      genre: 'Pop',
      isOpened: false,
      lastHeard: ''
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
