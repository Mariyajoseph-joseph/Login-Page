import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    email : new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required]),
  })
  login(){
    console.log(this.loginForm)
  }

  get Email():FormControl{
    return this.loginForm.get('email') as FormControl
  }
  get Password():FormControl{
    return this.loginForm.get('password') as FormControl
  }
 
  onLogin(){
    this.router.navigateByUrl('/dashboard')
  }
}
