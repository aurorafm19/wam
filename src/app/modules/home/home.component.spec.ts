import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatStepper, MatStepperNext } from '@angular/material/stepper';
import { By } from '@angular/platform-browser';
import { AppModule } from '../../app.module';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        AppModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shoould show 3 steps', () => {
    const steps = document.getElementsByClassName('mat-horizontal-stepper-content');
    expect(steps.length).toEqual(3);
  });

  it('should show first step (form with 2 inputs)', () => {
    const stepContent = document.getElementsByClassName(
      'mat-horizontal-stepper-content'
    );
    let form = {} as HTMLFormElement;
    const firstStepContent = stepContent[0].children;
    Array.from(firstStepContent).forEach((element: Element) => {
      if (element.nodeName === 'APP-STEP1') {
        form = element.getElementsByTagName('form')[0];
      }
    });

    expect(form.elements[0].attributes[3].textContent).toEqual('name');
    expect(form.elements[1].attributes[3].textContent).toEqual('lastname');
  });

  it('should pass to second and third step', () => {
    let buttonNextFirstStep = {} as HTMLButtonElement;
    let buttonNextSecondtStep = {} as HTMLButtonElement;
    let buttonPrevSecondStep = {} as HTMLButtonElement;
    const stepperComponent =
      fixture.debugElement.query(By.directive(MatStepper)).componentInstance;

    // check is first step
    expect(stepperComponent.selectedIndex).toBe(0);

    const stepContent = document.getElementsByClassName(
      'mat-horizontal-stepper-content'
    );

    // get Button next (first step)
    const firstStepContent = stepContent[0].children;
    const secondStepContent = stepContent[1].children;

    Array.from(firstStepContent).forEach((element: Element) => {
      if (element.nodeName === 'APP-STEP1') {
        buttonNextFirstStep = element.getElementsByTagName('button')[0];
      }
    });

    buttonNextFirstStep.addEventListener('click', () => {
      fixture.detectChanges();
      // check is second step
      expect(stepperComponent.selectedIndex).toBe(1);
    });

    Array.from(secondStepContent).forEach((element: Element) => {
      if (element.nodeName === 'APP-STEP2') {
        buttonPrevSecondStep = element.getElementsByTagName('button')[0];
        buttonNextSecondtStep = element.getElementsByTagName('button')[1];
      }
    });

    // check is third step
    buttonNextSecondtStep.addEventListener('click', () => {
      fixture.detectChanges();
      expect(stepperComponent.selectedIndex).toBe(2);
    });

    // check is first step
    buttonPrevSecondStep.addEventListener('click', () => {
      fixture.detectChanges();
      expect(stepperComponent.selectedIndex).toBe(0);
    });

  });
});
