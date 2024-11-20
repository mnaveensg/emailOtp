import { Component } from '@angular/core';
import { OtpService } from './otp.service';

@Component({
  selector: 'app-otp',
  template: `
  <div class="h-screen">
    <div class="flex justify-content-center">
        <div class="card col-3 border-primary shadow-7">
            <div class="card-body ">
                <div class="text-blue-800 flex justify-content-center">
                    <h2>OTP Authentication</h2>
                </div>
                @if(!otpSent){
                <div class="flex justify-content-between flex-column">
                    <div class="flex flex-row">
                        <div class="col">
                            <input class="col" [(ngModel)]="email" [placeholder]=emailPlaceholder type="email" />
                        </div>
                        <div class="col">
                            <button class="col" (click)="requestOtp()">{{ requestOtpName }}</button>
                        </div>
                    </div>
                    @if(email && emailError){
                    <div class="pl-2 error">{{ emailError }}</div>
                    }
                    @else if(email == ""){
                      <div class="pl-2 error">{{ emailError }}</div>
                    }
                </div>
                }
                @else if (otpSent) {
                <div class="flex justify-content-between flex-column">
                    <div class="flex flex-row">
                        <div class="col">
                            <input class="col" [(ngModel)]="otp" [placeholder]=otpPlaceholder type="text" />
                        </div>
                        <div class="col">
                            <button class="col" (click)="validateOtp()">Validate OTP</button>
                        </div>
                    </div>
                    @if (otpError) {
                    <div class="pl-2 error">{{ otpError }}</div>
                    }
                    @if(otpValid){
                    <div class="pl-2 success">OTP is valid!</div>
                    }
                </div>
                }
                <div class="pl-2">
                    <button *ngIf="otpValid" (click)="resetOtp()">Reset</button>
                </div>
            </div>
        </div>
    </div>
  </div>
  `,
  styles: [`
    
    .error {
      color: red;
    }
    .success {
      color: green;
    }
  `]
})
export class OtpComponent {
  otpPlaceholder = "Enter OTP(6 digits)";
  emailPlaceholder = "Enter your email";
  requestOtpName = "Request OTP";
  email: string = '';
  otp: string = '';
  otpSent: boolean = false;
  otpValid: boolean = false;
  otpError: string = '';
  emailError: string = '';
  private generatedOtp: string = '';

  constructor(private otpService: OtpService) { }

  // Request and generating OTP
  requestOtp(): void {
    if (this.isValidEmail(this.email)) {
      this.generatedOtp = this.otpService.generateOtp();
      this.otpService.setEmail(this.email);
      this.otpSent = true;
      this.emailError = '';
    }else if(this.email == "" || this.email == null || this.email === undefined){
      this.emailError = 'Email address is empty';
    }else {
      this.emailError = 'Please enter a valid email address';
    }
  }

  // Validating OTP
  validateOtp(): void {
    if (this.otpService.validateOtp(this.otp)) {
      this.otpValid = true;
      this.otpError = '';
    } else {
      this.otpError = 'Invalid OTP';
    }
  }

  // Reseting OTP
  resetOtp(): void {
    this.email = '';
    this.otp = '';
    this.otpSent = false;
    this.otpValid = false;
    this.otpService.clearOtp();
  }

  // Basic email validation
  isValidEmail(email: string): boolean {
    const emailValidation = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailValidation.test(email);
  }
}
