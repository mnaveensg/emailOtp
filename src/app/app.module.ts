import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { TransferScreenComponentComponent } from '../transfer-unit-screen/transfer-screen-component/transfer-screen-component.component';
import { StepperModule } from 'primeng/stepper';
import { FirstPageComponentComponent } from '../transfer-unit-screen/first-page-component/first-page-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { SecondPageComponentComponent } from '../transfer-unit-screen/second-page-component/second-page-component.component';
import { DropdownModule } from 'primeng/dropdown';
import { ThirdPageComponentComponent } from '../transfer-unit-screen/third-page-component/third-page-component.component';
import { OtpComponent } from '../otp/otp.component';

@NgModule({
  declarations: [
    AppComponent,
    // TransferScreenComponentComponent,
    // FirstPageComponentComponent,
    // SecondPageComponentComponent,
    // ThirdPageComponentComponent,
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
