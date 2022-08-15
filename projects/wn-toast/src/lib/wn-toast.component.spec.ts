import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WnToastComponent } from './wn-toast.component';

describe('WnToastComponent', () => {
  let component: WnToastComponent;
  let fixture: ComponentFixture<WnToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WnToastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WnToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
