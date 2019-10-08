import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicComponentContentComponent } from './dynamic-component-content.component';

describe('DynamicComponentContentComponent', () => {
  let component: DynamicComponentContentComponent;
  let fixture: ComponentFixture<DynamicComponentContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicComponentContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicComponentContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
