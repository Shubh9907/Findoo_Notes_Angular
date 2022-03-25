import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { MatSnackBar } from '@angular/material/snack-bar'
import { LoginDto } from 'src/app/login-dto';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: LoginDto = new LoginDto();
  loginForm = new FormGroup({
    email:new FormControl('', Validators.email),
    password:new FormControl('',Validators.required)
  })


  
  hide = true;
  durationInSeconds = 5000;
  
  constructor( private userService: UserService, private router: Router, private snackBar: MatSnackBar) { }

  openSnackBar(messgae: any) {
    this.snackBar.open(messgae,'close', {duration: this.durationInSeconds});
  }

  navToDash( a: any) {
    if (a.status == 2) {
      localStorage.setItem("data" ,a.data);
      this.router.navigate(['/dashboard']);   
    }
  }

  ngOnInit(): void {
  }

  navToForgotPage() {
    this.router.navigate(['/forgotpass']);
  }

  onSubmit() {
        this.userService.postRequest(this.user,"/login").subscribe( (data:any) => { this.openSnackBar(data.responseMsg), this.navToDash(data)
        });
    }
}
