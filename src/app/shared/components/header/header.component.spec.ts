import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MatSelect } from '@angular/material/select';
import { By } from '@angular/platform-browser';
import { AppModule } from '../../../app.module';
import { SharedModule } from '../../shared.module';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [
        SharedModule,
        AppModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should set language to English', fakeAsync(() => {

  //   spyOn(component, 'onSetLanguage').and.callThrough();

  //   const select = fixture.debugElement.query(By.directive(MatSelect));
  //   select.triggerEventHandler('selectionChange', 'en');
  //   tick();
  //   select.componentInstance.value = 'en';
  //   expect(component.onSetLanguage).toHaveBeenCalled();

  // }));
});
