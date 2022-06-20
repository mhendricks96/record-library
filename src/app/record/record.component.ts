import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent implements OnInit {

  @Input() singleRecord: any;


  constructor() { }

  ngOnInit(): void {
  }

}
