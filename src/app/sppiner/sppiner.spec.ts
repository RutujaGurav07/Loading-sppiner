import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SppinerComponent } from './sppiner';

describe('SppinerComponent', () => {
  let component: SppinerComponent;
  let fixture: ComponentFixture<SppinerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SppinerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SppinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
