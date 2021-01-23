import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultOkComponent } from './result-ok.component';

describe('ResultOkComponent', () => {
  let component: ResultOkComponent;
  let fixture: ComponentFixture<ResultOkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultOkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultOkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
