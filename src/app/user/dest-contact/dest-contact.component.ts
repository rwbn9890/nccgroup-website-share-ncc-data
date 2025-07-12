import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import {
  FormGroup,
  FormBuilder,
  FormArray,
  FormControl,
  Validators,
  AbstractControl,
  NgForm,
} from "@angular/forms";
import { ValueTransformer } from "@angular/compiler/src/util";
import { Title } from "@angular/platform-browser";
import { CrudService } from "src/app/shared/crud.service";
import { Router } from "@angular/router";
import { first } from "rxjs/operators";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-dest-contact",
  templateUrl: "./dest-contact.component.html",
  styleUrls: ["./dest-contact.component.css"],
})
export class DestContactComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  toggle = false;
  phoneNumber = "^((\\+91-?)|0)?[0-9]{10}$";
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private toast: ToastrService,
    private service: CrudService,
    private router: Router
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ["", Validators.required],
      email: [
        "",
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(80),
          Validators.email
        ]
      ],
      phone: [
        "",
        [
          Validators.required,
          Validators.maxLength(12),
          Validators.minLength(10),
          phoneNumberValidator
        ]
      ],
      message: ["", Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  gotohome() {
    this.toggle = false;
  }

  postregisterdata() {
    this.submitted = true;

    //console.log(this.registerForm.value);

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;

  this.service
  .registerInquiries({
    name: this.f.name.value,
    email: this.f.email.value,
    phone: this.f.phone.value,
    message: this.f.message.value
  })
      .pipe(first())
      .subscribe(
        data => {
          //this.toast.success("Registration successful");
          // this.router.navigate(["/"]);
          this.loading = false;
          this.onReset();
          this.toggle = true;
        },
        error => {
          // this.alertService.error(error);
          this.loading = false;
        }
      );
  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}

export function phoneNumberValidator(
  control: AbstractControl
): { [key: string]: any } | null {
  const valid = /^\d+$/.test(control.value);
  return valid
    ? null
    : { invalidNumber: { valid: false, value: control.value } };
}
