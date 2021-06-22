import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() isAuth:boolean = true;

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

}
