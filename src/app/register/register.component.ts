import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(private authService:AuthService,private route:Router) { }

  ngOnInit(): void {
  }

  registerUser(form:NgForm){
    this.authService.registerUser(form)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    );

    alert("your account is ready")
    this.route.navigate(['']);
  }

}
