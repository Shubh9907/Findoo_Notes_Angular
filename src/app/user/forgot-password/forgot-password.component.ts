import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  email!: string;
  durationInSeconds = 5000;


  constructor(private userService: UserService, private snackBar: MatSnackBar, private router: Router) { }

  openSnackBar(messgae: any) {
    this.snackBar.open(messgae, 'close', { duration: this.durationInSeconds });
  }

  ngOnInit(): void {
  }

  navToLogin(a: any) {
    if (a.status == 1) {
      localStorage.setItem("token", a.data);
      this.router.navigate(['/login']);
    }
  }

  onSubmit() {
    this.userService.forgotPass(this.email).subscribe((data: any) => { this.openSnackBar(data.responseMsg), this.navToLogin(data) });
  }

}
