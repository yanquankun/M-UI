import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.less']
})
export class ApiComponent implements OnInit {
  @Input() ApiData: Array<object> = [];

  constructor() { }

  ngOnInit() {
    console.log(this.ApiData)
  }

}
