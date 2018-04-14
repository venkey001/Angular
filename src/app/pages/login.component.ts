import { Router } from '@angular/router';
import { LoginModel } from './login-model';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr';

@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit{

  ngOnInit() {
    this.resetForm();
    document.getElementById('userID').focus();
  }

  constructor(public loginService : LoginService, private router : Router, public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
   }

  login(form? : NgForm)
  {
    var login = form.value;
    this.loginService.loginCheck(form.value)
    .subscribe(data => {
      if(data == false)
      {
        this.resetForm(form);
        this.toastr.error("Username or password incorrect.");
      }
      else
      this.router.navigate([`./dashboard`]);
      console.log(data)
    },
  error=> {
    this.resetForm(form);
    this.toastr.error("Sorry we are unable to reach you.");
  });
  }

  resetForm(form? : NgForm)
  {
    if(form != null)
      form.reset();

      this.loginService.login = {
        id : null,
        userID : '',
        password : ''
      }
  }
}
