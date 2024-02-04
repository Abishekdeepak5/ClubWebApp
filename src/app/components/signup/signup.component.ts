import { Component,Injectable, OnInit } from '@angular/core';
import { UserModel } from '../../shared/models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

@Injectable()
export class SignupComponent implements OnInit{ 
  registerUser: UserModel = new UserModel();
  jsontext:any;
  
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
  }
  makePostRequest(): Observable<any> {
    // Define the URL for your API endpoint
    const apiUrl = 'https://localhost:7251/api/User/Registration';
  
    // Define the data you want to send in the request body
    const postData = {
      id: 0,
      user_name: 'Abishek',
      first_name: 'Abishek',
      last_name: 'A',
      password: 'Abishek',
      email: 'abishekdeepak321@gmail.com',
      phone_number: '1234567890',
      isSuccess: true,
      message: ['string'],
      token: 'string'
    };
  
    // Set the HTTP headers
    const headers = new HttpHeaders({
      'Accept': 'text/plain',
      'Content-Type': 'application/json'
    });
  
    // Make the POST request
    return this.http.post(apiUrl, postData, { headers });
  }
  signUp(user:UserModel){
    const apiUrl = 'https://localhost:7251/api/User/Registration';  
    const postData={
      id: 0,
      user_name: user.username,
      first_name: user.firstName,
      last_name: user.lastName,
      password: 'Abishek',
      email: user.email,
      phone_number: user.phone,
      isSuccess: true,
      message: [
        'string'
      ],
      token: 'string'
    };
      const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    this.http.post(apiUrl, postData, { headers }).subscribe(
        (data)=>{
      this.jsontext=data;
    }
    );
  }

  example(){
    this.makePostRequest().subscribe(
      (data)=>{
        this.jsontext=data;
      }
    );
    
  }

  samplehttp(){
    const apiUrl='https://jsonplaceholder.typicode.com/posts';
    const postData={
      title: 'foo',
      body: 'bar',
      userId: 1,
    };
    const headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  this.http.post(apiUrl, postData, { headers }).subscribe((data)=>{
    this.jsontext=data;
    console.log(data);
  });
  }
}
