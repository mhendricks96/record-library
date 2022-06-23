import { Component, OnInit, Inject } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { RecordService } from '../record.service';
import { lookupListToken } from '../providers';

@Component({
  selector: 'app-record-form',
  templateUrl: './record-form.component.html',
  styleUrls: ['./record-form.component.scss'],
})
export class RecordFormComponent implements OnInit {
  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: this.formBuilder.control(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('[\\w\\-\\s\\/]+'),
        ])
      ),
      genre: this.formBuilder.control(''),
      artist: this.formBuilder.control(''),
    });
  }

  onSubmit(singleRecord: any) {
    this.recordService.add(singleRecord)
  }

  constructor(
    private formBuilder: FormBuilder,
    private recordService: RecordService,
    @Inject(lookupListToken) public lookupLists: any
  ) {}
}
