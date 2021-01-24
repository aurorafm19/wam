import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CoreModule } from '../core/core.module';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CoreModule,
    MaterialModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
