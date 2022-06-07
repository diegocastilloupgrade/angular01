import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  myDate = new Date();

  constructor() {}

  ngOnInit(): void {
    console.log("esta es mi fecha", this.myDate);
  }
}
