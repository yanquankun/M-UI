import { Component, OnInit } from '@angular/core';
import { VERSION } from './../version';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  title: string = "m-ui-lib for angular UI frame"
  version = "v" + VERSION.full;
  constructor() { }

  ngOnInit() {
    console.log(VERSION)
  }

}
