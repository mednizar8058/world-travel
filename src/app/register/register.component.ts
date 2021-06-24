import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  registerUser(form:NgForm){
    this.authService.registerUser(form)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    );

    alert("your account is ready")
  }

}
