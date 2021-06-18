import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  lastRefresh = new Promise(
    (resolve,reject) =>{
      const date = new Date();
      setTimeout(
        () => {
        resolve(date);
      }, 2000);
    }
  );

  constructor() { }

  ngOnInit(): void {
  }

}
