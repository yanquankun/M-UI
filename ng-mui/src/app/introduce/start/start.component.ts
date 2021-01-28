import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.less']
})
export class StartComponent implements OnInit {

  constructor() { }

  introduce() {
    window.open('http://39.97.119.181/myself/index.html');
  }

  three() {
    window.open('http://39.97.119.181/3DResume/resume.html');
  }

  github() {
    window.open('https://github.com/yanquankun');
  }

  toNpm() {
    window.open('https://www.npmjs.com/package/m-ui-lib');
  }

  ngOnInit() {
  }

}
