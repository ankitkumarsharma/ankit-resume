import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CONSTANT } from 'src/app/core/constants/app.constant';
import { ContactUsService } from 'src/app/services/contact-us/contact-us.service';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {
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
  constructor(private _fb: FormBuilder, private contactUsService: ContactUsService, private toasterService: ToastrService) { }

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
      this.contactUsService.contactUs(payload).subscribe((res:any)=>{
        if(res){
          this.toasterService.success(this.labels.successMessage.emailSent);
          this.contactForm.reset();
          this.submitted = false;
        }
      })

    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
