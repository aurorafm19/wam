import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AppModule } from '../../app.module';
import { User } from '../../core/models/user-model';
import { SharedModule } from '../../shared/shared.module';

import { Step1Component } from './step1.component';

describe('Step1Component', () => {
  let component: Step1Component;
  let fixture: ComponentFixture<Step1Component>;

  const formBuilder: FormBuilder = new FormBuilder();

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

  it('submit the form', () => {
    const formKeys = ['name', 'lastname'];

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
  })
});
