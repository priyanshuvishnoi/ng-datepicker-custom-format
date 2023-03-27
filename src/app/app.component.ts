import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import * as moment from 'moment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ng-practice-app';
  form = new FormGroup({
    date: new FormControl(moment()),
  });

  ngOnInit() {
    this.form.controls.date.valueChanges.subscribe((value) => {
      console.log(JSON.stringify(value?.format()));
    });
  }
}
