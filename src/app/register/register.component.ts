import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name!: string;
  email!: string;
  password!: string;
  mobileNumber!: string;
  
  constructor(private http:HttpClient) {}
   

  ngOnInit(): void {

  }
  register() {
     const userObj={
      
      "name":this.name,
      "email":this.email,
      "password":this.password,
      "mobilenumber":this.mobileNumber

     };
     const url="http://localhost:9000/users/save";
     this.http.post(url,userObj).subscribe((res)=>{
       console.log(res);
       alert("You have registered successfully");
     },(err)=>{
       console.log(err);
       alert("Please register again");
     })
  }
}











