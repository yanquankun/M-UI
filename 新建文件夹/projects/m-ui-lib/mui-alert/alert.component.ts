import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AlertType } from './type';
@Component({
  selector: 'm-ui-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.less']
})
export class MuiAlertComponent implements OnInit {
  // Alert 标题
  @Input() alertTitle: string = "";
  // Alert 类型
  @Input() type: AlertType = 'info';
  // 是否显示图标，用于支持用户自定义图标
  @Input() showIcon = true;
  // 关闭延迟时间
  @Input() closeDelayTime: number | boolean = 2000;
  // 是否可关闭
  @Input() closeable = false;
  // 关闭回调
  @Output() closeEvent: EventEmitter<boolean | string> = new EventEmitter<boolean | string>();
  hide = false;

  constructor() { }

  close() {
    this.closeEvent.emit("close");
    this.hide = true;
  }

  ngOnInit() {
    this.closeDelayTime && setTimeout(() => {
      this.close();
    }, Number(this.closeDelayTime));
  }

}
