import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gen8Component } from './gen8.component';

describe('Gen8Component', () => {
  let component: Gen8Component;
  let fixture: ComponentFixture<Gen8Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Gen8Component]
    });
    fixture = TestBed.createComponent(Gen8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
