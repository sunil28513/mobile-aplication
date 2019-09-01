import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestmonialsComponent } from './testmonials.component';

describe('TestmonialsComponent', () => {
  let component: TestmonialsComponent;
  let fixture: ComponentFixture<TestmonialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestmonialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestmonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
