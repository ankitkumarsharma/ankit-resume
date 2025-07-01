import { Component, inject } from '@angular/core';
import { CONSTANT } from '../../core/constants/app.constant';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-me',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.scss'
})
export class ContactMe {
  readonly contactInfo = CONSTANT.myInfo;
  contactForm!: FormGroup;
  submitted: boolean = false;
  readonly labels = {
    errorMessage: {
      required:'This field is required!',
      emailFormat:'Email format is required!'
    },
    successMessage: {
      emailSent:'Success!, This form has been submitted, Thanks'
    }
  }
  // Injecting services
  private _fb = inject(FormBuilder);
  
  ngOnInit(): void {
    this.contactFormInit();
  }
  contactFormInit(){
    this.contactForm = this._fb.group({
      name: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      subject: ['',[Validators.required]],
      message: [''],
    })
  }
  get nameControl(){
    return this.submitted && this.contactForm.controls['name'].errors;
  }
  get emailControl(){
    return this.submitted && this.contactForm.controls['email'].errors;
  }
  get subjectControl(){
    return this.submitted && this.contactForm.controls['subject'].errors;
  }
  onSubmitContactForm(){
    let input = this.contactForm.value;
    this.submitted = true;
    if(this.contactForm.valid){
      let payload = {
        email: input.email,
        _subject: input.subject,
        message: `${input.name} ${input.message}`
      }
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
