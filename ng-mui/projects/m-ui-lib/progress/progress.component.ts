import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'm-ui-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.less']
})
export class ProgressComponent implements OnInit {
  // 进度条高度 5<=progressHeight<=20,单位px
  @Input() progressHeight: number = 10;
  // 进度比 0<=progressHeight<=100,单位%
  @Input() progress: number = 20;
  // 进度条颜色
  @Input() progressColor: string = "#1890ff";
  // 是否采用彩色进度条
  @Input() coloursProgress: boolean = false;
  // 彩色进度条颜色 颜色数组 必须为两个色值
  @Input() coloursProgressColor: Array<string> = ["#1890ff", "#FFFF00"];
  // 是否采用进度条尾部内容
  @Input() showTail: boolean = false;
  @ViewChild("colorBar") colorBar: ElementRef<any>;

  constructor() { }

  ngAfterViewInit() {
    if (this.coloursProgress) {
      console.log(this.colorBar)
      const a = `repeating-linear-gradient(-45deg,
        transparent,
        transparent 25px,
        rgba(255,255,255,1) 25px,
        rgba(255,255,255,1) 50px)`;
      this.colorBar.nativeElement.style.background = `repeating-linear-gradient(-45deg,
        ${this.coloursProgressColor[0]},
        ${this.coloursProgressColor[0]} 10px,
        ${this.coloursProgressColor[1]} 10px,
        ${this.coloursProgressColor[1]} 20px)`;
    }
  }

  ngOnInit() {
    this.progressHeight < 5 && (this.progressHeight = 5);
    this.progressHeight > 20 && (this.progressHeight = 20);
    this.progress < 0 && (this.progress = 0);
    this.progress > 100 && (this.progress = 100);
  }

}
