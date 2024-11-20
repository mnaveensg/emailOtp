import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OtpService {

  private generatedOtp: string | null = null;
  private email: string | null = null;

  constructor() { }

  // Generate a random 6-digit OTP
  generateOtp(): string {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    this.generatedOtp = otp;
    return otp;
  }

  // Store email
  setEmail(email: string): void {
    this.email = email;
    // Simulate sending OTP to the email by logging to console
    console.log(`OTP sent to: ${email} -> OTP: ${this.generatedOtp}`);
  }

  // Validate the entered OTP
  validateOtp(otp: string): boolean {
    return this.generatedOtp === otp;
  }

  // Clear OTP (to simulate expiry or successful validation)
  clearOtp(): void {
    this.generatedOtp = null;
    this.email = null;
  }
}
