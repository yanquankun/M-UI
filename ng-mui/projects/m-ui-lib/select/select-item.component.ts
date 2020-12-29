import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'm-ui-select-item',
  templateUrl: './select-item.component.html',
  styleUrls: ['./select-item.component.less']
})
export class SelectItemComponent implements OnInit {
  // 选项value值 唯一id
  @Input() value: number | string;
  // 选项显示名称
  @Input() name: number | string;
  // 是否被选中
  @Input() checked: string = 'false';
  // 点击选项回调
  @Output() selectEmit: EventEmitter<{ key: string | number, name: string | number }> = new EventEmitter<{ key: string | number, name: string | number }>();

  constructor() { }

  select() {
    this.selectEmit.emit({ key: this.value, name: this.name });
  }

  ngOnInit() { }

}
