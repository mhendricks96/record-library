import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-record-form',
  templateUrl: './record-form.component.html',
  styleUrls: ['./record-form.component.scss']
})
export class RecordFormComponent implements OnInit {

  form!: FormGroup;
  
  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', Validators.compose([
        Validators.required, Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      genre: new FormControl(''),
      artist: new FormControl(''),
    });
  }


  

  onSubmit(singleRecord: any) {
    console.log(singleRecord);
  }

  constructor() { }


}
