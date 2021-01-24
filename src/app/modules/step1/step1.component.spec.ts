import { CommonModule } from '@angular/common';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { AppModule } from '../../app.module';
import { User } from '../../core/models/user-model';

import { Step1Component } from './step1.component';

describe('Step1Component', () => {
  let component: Step1Component;
  let fixture: ComponentFixture<Step1Component>;

  const formBuilder: FormBuilder = new FormBuilder();

  const formKeys = ['name', 'lastname'];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Step1Component],
      imports: [
        ReactiveFormsModule,
        CommonModule,
        AppModule
      ],
      providers: [
        { provide: FormBuilder, useValue: formBuilder }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step1Component);
    component = fixture.componentInstance;
    component.userForm = formBuilder.group({
      name: '',
      lastname: ''
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.userForm.valid).toBeFalsy();
  });

  it('form invalid when user insert a number', () => {
    component.userForm.controls[formKeys[0]].setValue('123');
    expect(component.userForm.valid).toBeFalsy();
  });

  it('form invalid when user insert am special character', () => {
    component.userForm.controls[formKeys[1]].setValue('pet@er');
    expect(component.userForm.valid).toBeFalsy();
  });

  it('should click on continue button', fakeAsync(() => {

    spyOn(component, 'onContinue');

    const button = fixture.debugElement.query(By.css('.button-next'));
    button.triggerEventHandler('click', null);
    tick();
    expect(component.onContinue).toHaveBeenCalled();
  }));


  it('submit the form', () => {
    expect(component.userForm.valid).toBeFalsy();
    component.userForm.controls[formKeys[0]].setValue('Peter');
    component.userForm.controls[formKeys[1]].setValue('Parker');
    expect(component.userForm.valid).toBeTruthy();

    let user = {} as User;
    component.user.subscribe((result: User) => user = result);

    // trigger onContinue function
    component.onContinue();

    // check if the emitted value is correct
    expect(user.name).toBe('Peter');
    expect(user.lastname).toBe('Parker');
  });
});
