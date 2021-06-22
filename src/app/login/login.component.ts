import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  loginUser(form:NgForm){
    this.authService.loginUser(form)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

}
