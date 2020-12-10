import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuiAlertComponent } from './alert.component';

describe('MuiAlertComponent', () => {
  let component: MuiAlertComponent;
  let fixture: ComponentFixture<MuiAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MuiAlertComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuiAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
