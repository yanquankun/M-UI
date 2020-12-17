import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'm-ui-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.less']
})
export class TagComponent implements OnInit {
  // 是否启动自定义颜色
  @Input() tagBgc: string = "";
  // 是否可关闭
  @Input() closeable: boolean = false;
  // 是否打开点击tag标签开启庆祝效果
  @Input() celebrate: boolean = false;
  // 关闭事件
  @Output() closeEvent: EventEmitter<{ val: string }> = new EventEmitter<{ val: string }>();
  @ViewChild("content") content: ElementRef<any>;
  @ViewChild("tag") tag: ElementRef<any>;
  hideTag: boolean = false;
  beforeBgc = "#fafafa";

  constructor() { }

  tagClick(e) {
    const tag = this.tag.nativeElement;
    if (this.celebrate) {
      const particles = [];
      const color = this.randomColor();

      const particle = document.createElement('span');
      particle.classList.add('particle', 'move');

      // const { x, y } = this.randomLocation();
      const { x, y } = { x: 50 + "px", y: -(e['clientY'] - 50) + "px" };
      particle.style.setProperty('--x', x);
      particle.style.setProperty('--y', y);
      particle.style.background = color;

      tag.appendChild(particle);

      particles.push(particle);

      setTimeout(() => {
        for (let i = 0; i < 100; i++) {
          const innerP = document.createElement('span');
          innerP.classList.add('particle', 'move');
          innerP.style.transform = `translate(${x}, ${y})`;

          const xs = Math.random() * 200 - 100 + 'px';
          const ys = Math.random() * 200 - 100 + 'px';
          innerP.style.setProperty('--x', `calc(${x} + ${xs})`);
          innerP.style.setProperty('--y', `calc(${y} + ${ys})`);
          innerP.style.animationDuration = Math.random() * 300 + 200 + 'ms';
          innerP.style.background = color;

          tag.appendChild(innerP);
          particles.push(innerP)
        }

        setTimeout(() => {
          particles.forEach(particle => {
            particle.remove();
          })
        }, 1000)
      }, 1000);
    }
  }

  randomLocation() {
    return {
      x: Math.random() * window.innerWidth - window.innerWidth / 2 + 'px',
      y: Math.random() * window.innerHeight - window.innerHeight / 2 + 'px',
    }
  }

  randomColor() {
    return `hsl(${Math.floor(Math.random() * 361)}, 100%, 50%)`;
  }

  close() {
    this.hideTag = true;
    const val = this.content.nativeElement.outerText;
    const output = {
      val: val,
    }
    this.closeEvent.emit(output);
  }

  ngOnInit() { }

}
