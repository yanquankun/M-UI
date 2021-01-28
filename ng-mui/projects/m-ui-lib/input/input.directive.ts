import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[mUiInput]',
  exportAs: 'mUiInput',
})
export class InputDirective implements OnInit {
  // 输入框尺寸
  @Input()
  set size(val: 'small' | 'default' | 'large') {
    this._size = val;
    switch (val) {
      case 'small':
        this.setCssToDom("height:24px", this.element);
        break;
      case 'default':
        this.setCssToDom("height:32px", this.element);
        break;
      case 'large':
        this.setCssToDom("height:40px", this.element);
        break;
    }
  }

  private element: any = null;
  private _size: any = "default";

  constructor(private el: ElementRef) {
    this.element = el.nativeElement;
    this.element.classList.add("mui-ipt");
  }

  setCssToDom(cssString: string, dom: Element) {
    dom.setAttribute("style", cssString);
  }

  ngOnInit() {

  }

}
