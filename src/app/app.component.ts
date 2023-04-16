import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
    <button (click)="makeRequest()">Make Request</button>
  `
})

export class AppComponent {
  
  constructor(private http: HttpClient) {}
  
  // intra_auth(): void {
  //     console.log('omg dis is wooorking')
  // // intra_auth(){
  // //   //call http://10.11.4.19:3000/login
  // }
  // makeRequest() {
  // this.http.get('https://localhost:3000/login', { headers: headers }).subscribe(response => {
  //   console.log(response);
  // });
  // }

  makeRequest() {
    const headers = new HttpHeaders({
      'HeaderName': 'Make',
      'Access-Control-Allow-Origin:': 'localhost:3000'
    });
  
    this.http.get('https://localhost:3000/login', { headers: headers }).subscribe(response => {
      console.log(response);
    });
  }
}