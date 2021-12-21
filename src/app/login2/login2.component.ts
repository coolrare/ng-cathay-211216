import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginModel } from '../login/login.component';

@Component({
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit, OnDestroy {

  data: any = {
    "users": [
      {
        "email": "doggy.huang@gmail.com",
        "password": "123sdfDSF"
      },
      {
        "email": "will.huang@miniasp.com",
        "password": "f930u98rufdFD"
      },
      {
        "email": "doggy.epaper@gmail.com",
        "password": "123jisdfFDF"
      }
    ],
    "isRemember": true
  };

  form: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    document.body.className = 'bg-gradient-primary';

    this.form = this.fb.group({
      users: this.fb.array([]),
      isRemember: this.fb.control(true)
    });

    this.data.users.forEach((user: any) => {
      this.getFormArray('users').push(this.createUserForm());
    });

    this.form.setValue(this.data);
  }

  addNewUser() {
    this.getFormArray('users').push(this.createUserForm());
  }

  createUserForm() {
    return this.fb.group({

      email: this.fb.control('', {
        validators: [Validators.required, Validators.email, Validators.minLength(5)],
        updateOn: 'blur'
      }),
      password: this.fb.control('', {
        validators: [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,30}$/)],
        updateOn: 'blur'
      })

    });
  }

  ngOnDestroy(): void {
    document.body.className = '';
  }

  doSubmit() {
    if (this.form.valid) {
      console.log('送出表單', this.form.value);
    }
  }

  getFormControl(name: string) {
    return this.form.get(name) as FormControl;
  }
  getFormGroup(name: string) {
    return this.form.get(name) as FormGroup;
  }
  getFormArray(name: string) {
    return this.form.get(name) as FormArray;
  }

}
