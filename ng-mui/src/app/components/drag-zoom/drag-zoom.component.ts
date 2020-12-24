import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag-zoom',
  templateUrl: './drag-zoom.component.html',
  styleUrls: ['./drag-zoom.component.less']
})
export class DragZoomComponent implements OnInit {

  constructor() { }

  domRect(e) {
    console.log(e)
  }

  ngOnInit() {
  }

}
