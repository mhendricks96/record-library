import { Component, OnInit } from '@angular/core';
import { RecordService } from '../record.service';

@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.scss'],
})
export class RecordListComponent implements OnInit {
  // i should change this to 'records' at some point, but i would then have obvously have to go around and change that where it is used
  mediaItems: any;

  onSingleRecordDelete(singleRecord: any) {
    this.recordService.delete(singleRecord)
  }

  constructor(private recordService: RecordService) {}

  ngOnInit(): void {
    this.mediaItems = this.recordService.get();
  }
}
