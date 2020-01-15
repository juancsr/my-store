import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder , Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '@core/services/auth/auth.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.buildForm();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit() {}

  login(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      this.authService.login(value.email, value.password)
      .then(() => {
        this.router.navigate(['/admin']);
      })
      .catch(() => {
        alert('Usuario no valido');
      });
    }
  }
}
