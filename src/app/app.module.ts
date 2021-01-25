import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { Step1Component } from './modules/step1/step1.component';
import { HomeComponent } from './modules/home/home.component';
import { Step2Component } from './modules/step2/step2.component';
import { ResultOkComponent } from './modules/result-ok/result-ok.component';
import { InProgressComponent } from './modules/in-progress/in-progress.component';

@NgModule({
  declarations: [
    AppComponent,
    Step1Component,
    HomeComponent,
    Step2Component,
    ResultOkComponent,
    InProgressComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
