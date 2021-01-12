import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent implements OnInit {
  ApiData: Array<Object> = [{
    title: "[button 按钮]",
    api: []
  },];
  size = 'default';

  constructor() { }

  ngOnInit() {
  }

}
