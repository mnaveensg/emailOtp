import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { DropdownModule } from 'primeng/dropdown';
import { OtpComponent } from '../otp/otp.component';

@NgModule({
  declarations: [
    AppComponent,
    OtpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    StepperModule,
    FormsModule,
    InputTextModule,
    InputIconModule,
    IconFieldModule,
    DropdownModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
