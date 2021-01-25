import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { InProgressComponent } from './modules/in-progress/in-progress.component';
import { ResultOkComponent } from './modules/result-ok/result-ok.component';
import { Step1Component } from './modules/step1/step1.component';
import { Step2Component } from './modules/step2/step2.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'step1',
        component: Step1Component
      },
      {
        path: 'step2',
        component: Step2Component
      },
      {
        path: 'result-ok',
        component: ResultOkComponent
      }
    ],
  },
  {
    path: 'in-progress',
    component: InProgressComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
