import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularOnscreenKeyboardComponent } from './angular-onscreen-keyboard.component';

describe('AngularOnscreenKeyboardComponent', () => {
  let component: AngularOnscreenKeyboardComponent;
  let fixture: ComponentFixture<AngularOnscreenKeyboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularOnscreenKeyboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularOnscreenKeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
