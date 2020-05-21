import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  authForm: FormGroup;
  showPassword = false;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.authForm = this.fb.group({
      email: ['admin@galaxy.edu.pe', [Validators.required, Validators.email]],
      password: ['123456', Validators.required] // passwordStrong
    });
    // this.authForm = new FormGroup({
    //   email: new FormControl('admin@galaxy.edu.pe', [Validators.required, Validators.email]),
    //   password: new FormControl('123456', Validators.required)
    // });
  }

  get emailField() {
   return this.authForm.get('email');
  }

  get passwordField() {
    return this.authForm.get('password');
  }

  ngOnInit(): void {
  }

  signIn() {
    if (this.authForm.invalid) { return; }
    // this.authForm.value
    // redireccionar
    // this.router.navigateByUrl('/admin');
  }

  changeLang(lang: string) {
  }

}
