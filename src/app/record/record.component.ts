import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent implements OnInit {

  @Input() singleRecord: any;
  @Output() delete = new EventEmitter();


  onDelete() {
    this.delete.emit(this.singleRecord);

    console.log(this.singleRecord.title, "deleted")
  }

  constructor() { }

  ngOnInit(): void {
  }

}
