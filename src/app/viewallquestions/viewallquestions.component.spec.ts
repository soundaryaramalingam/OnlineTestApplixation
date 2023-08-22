import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallquestionsComponent } from './viewallquestions.component';

describe('ViewallquestionsComponent', () => {
  let component: ViewallquestionsComponent;
  let fixture: ComponentFixture<ViewallquestionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewallquestionsComponent]
    });
    fixture = TestBed.createComponent(ViewallquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
