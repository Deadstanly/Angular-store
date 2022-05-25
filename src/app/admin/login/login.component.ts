import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  public submitted: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    })
  }

  public submit() {
    if (this.form.invalid) {
      return;
    }
    this.submitted = true;
    const userInfo = {
      email: this.form.value.email,
      password: this.form.value.password,
      returnSecureToken: true
    }
    this.authService.login(userInfo).subscribe(res => {
      this.form.reset();
      this.router.navigate(['/admin/dashboard']).then();
      this.submitted = false;
    }, () => this.submitted = true)
  }
}
