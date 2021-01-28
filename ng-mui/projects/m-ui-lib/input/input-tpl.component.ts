import { Component, OnInit, ElementRef, Input, ContentChildren, AfterContentInit, QueryList } from '@angular/core';
import { InputDirective } from './input.directive';
@Component({
  selector: 'm-ui-input-tpl',
  templateUrl: './input-tpl.component.html',
  styleUrls: ['./input-tpl.component.less'],
  host: {
    '[class.mui-ipt-affixation]': `_prefix || _suffix`,
    '[class.mui-ipt-prefix]': `_prefix && !_suffix`,
    '[class.mui-ipt-suffix]': `!_prefix && _suffix`,
    '[class.mui-ipt-affix]': `_prefix && _suffix`,
  }
})
export class InputTplComponent implements AfterContentInit, OnInit {
  // 前缀dom
  @Input()
  set prefix(val: ElementRef<any>) {
    this._prefix = val;
  };
  get(): ElementRef<any> {
    return this._prefix;
  }
  // 后缀dom 
  @Input()
  set suffix(val: ElementRef<any>) {
    this._suffix = val;
  };
  get suffix(): ElementRef<any> {
    return this._suffix;
  }

  _prefix: ElementRef<any> = null;
  _suffix: ElementRef<any> = null;
  @ContentChildren(InputDirective) listOfNzInputDirective!: QueryList<InputDirective>;

  constructor() { }

  ngOnInit() {
  }

  updateChildrenInputSize(): void {
    if (this.listOfNzInputDirective) {
      this.listOfNzInputDirective.forEach(item => { });
    }
  }

  ngAfterContentInit(): void {
    this.updateChildrenInputSize();
  }

}
