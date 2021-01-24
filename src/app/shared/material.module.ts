import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
@NgModule({
  exports: [
    MatButtonModule,
    MatIconModule,
    MatStepperModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatMenuModule
  ]
})
export class MaterialModule { }
