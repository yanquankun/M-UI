import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'm-ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent implements OnInit {
  // 按钮类型 'default'|'danger'|'primary'|'dashed'
  @Input() muiType: 'default' | 'danger' | 'primary' | 'dashed' = 'default';
  // 按钮大小 'large'|'default'|'small'
  @Input() muiSize: 'large' | 'default' | 'small' = 'default';
  // 按钮前缀
  @Input() prefix: ElementRef<any> = null;
  // 按钮后缀
  @Input() suffix: ElementRef<any> = null;

  @ViewChild("muiBtn") muiBtn: ElementRef<any>;

  constructor() { }

  setDisabled<T>(dom: ElementRef<any>): void {
    dom.nativeElement.style.color = 'rgba(0,0,0,.25)';
    dom.nativeElement.style.backgroundColor = '#f5f5f5';
    dom.nativeElement.style.borderColor = '#d9d9d9';
  }

  ngOnInit() {
    const parent = this.muiBtn.nativeElement.parentNode;
    if (parent.getAttribute('disabled') || parent.getAttribute('disabled') == '') {
      this.setDisabled(this.muiBtn);
      parent.style.pointerEvents = 'none';
    }
    console.log(this.prefix)
  }

}
