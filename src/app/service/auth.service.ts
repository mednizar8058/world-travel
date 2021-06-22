// import { HttpClient} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';


@Injectable()
export class AuthService{
    private registerUrl = "http://localhost:1234/api/user/registration";
    private loginUrl = "http://localhost:1234/api/user/login";

    constructor(private http:HttpClient){

    }

    registerUser(form:NgForm){
        return this.http.post(this.registerUrl,form.value);
        
    }
    loginUser(form:NgForm){
        return this.http.post(this.loginUrl,form.value);
        
    }

}