import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTplComponent } from './input-tpl.component';

describe('InputTplComponent', () => {
  let component: InputTplComponent;
  let fixture: ComponentFixture<InputTplComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputTplComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
