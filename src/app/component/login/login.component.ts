import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  username: string='';
  password: string='';

  constructor(private router:Router){}

  onSubmit(){
      //Check if the entered username and password are correct
     if (this.username === 'kiddo' && this.password === 'kiddo123') {
      // Successful login, navigate to the products page
      this.router.navigate(["/products"]);
    } else {
      // Failed login, display an error message or handle accordingly
      console.error('Login failed');
    }
  }
}
