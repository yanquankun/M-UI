import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag-zoom',
  templateUrl: './drag-zoom.component.html',
  styleUrls: ['./drag-zoom.component.less']
})
export class DragZoomComponent implements OnInit {
  ApiData: Array<Object> = [{
    title: "[dragZoom 拖拽缩放]",
    api: [{
      name: "highlightColor",
      describe: "选中背景色",
      type: "string",
      default: "#fff"
    }, {
      name: "domRect",
      describe: "拖拽/缩放结束后，返回当前dom长、宽、相对位置、绝对位置",
      type: "Object<bottom: number,height: number,left: number, right: number,top: number,width: number,x: number,y: number>",
      default: ""
    }]
  },];

  constructor() { }

  domRect(e) {
    console.log(e)
  }

  ngOnInit() {
  }

}
