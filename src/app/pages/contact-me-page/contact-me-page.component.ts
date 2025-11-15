import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-me-page',
  templateUrl: './contact-me-page.component.html',
  styleUrls: ['./contact-me-page.component.css']
})
export class ContactMePageComponent implements OnInit {

  // ⭐ IMPORTANT: REPLACE THIS WITH YOUR ACTUAL FORMSPREE ENDPOINT
  // It looks like this: 'https://formspree.io/f/{your-unique-hash}'
  private formspreeUrl = 'https://formspree.io/f/mvgdqola'; // <-- Replace this demo URL

  contactEmail = 'sivagangadharreddy1999@gmail.com';
  contactForm: FormGroup;
  isSubmitting: boolean = false; // To prevent double submission
  successMessage = '';
  errorMessage = '';

  // ❌ Removed: private http: HttpClient
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: [''],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.contactForm.invalid || this.isSubmitting) {
      return;
    }

    this.isSubmitting = true;
    this.successMessage = '';
    this.errorMessage = '';

    // Convert form data to a plain JavaScript object
    const formData = this.contactForm.value;

    // ⭐ NEW LOGIC: Use native fetch API to send data directly to Formspree
    fetch(this.formspreeUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // Formspree accepts JSON data via 'fetch'
      body: JSON.stringify(formData),
    })
    .then(async response => {
      this.isSubmitting = false;
      if (response.ok) {
        this.successMessage = 'Thank you! Your message has been sent successfully.';
        this.contactForm.reset();
        // Manually mark controls as pristine/untouched after reset
        Object.keys(this.contactForm.controls).forEach(key => {
          this.contactForm.get(key)?.setErrors(null);
          this.contactForm.get(key)?.markAsPristine();
          this.contactForm.get(key)?.markAsUntouched();
        });
      } else {
        // Handle error response from Formspree
        const errorData = await response.json();
        const errorText = errorData?.errors ? errorData.errors.map((e: any) => e.message).join(', ') : 'An unknown error occurred.';
        this.errorMessage = `Form Submission Failed: ${errorText}. Please try again.`;
      }
    })
    .catch(error => {
      this.isSubmitting = false;
      console.error('Network or Fetch Error:', error);
      this.errorMessage = 'A network error prevented submission. Check your internet connection.';
    });
  }
}