import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ForgetDto } from 'src/app/forget-dto';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  token!: any;
  
  forgetDto: ForgetDto = new ForgetDto();
  durationInSeconds = 5000;

  constructor(private route: ActivatedRoute, private snackBar: MatSnackBar,  private userService: UserService, private router: Router) {
    this.token = this.route.snapshot.paramMap.get('token');
    // console.log("your token is:- " +this.token);
   }

   openSnackBar(messgae: any) {
    this.snackBar.open(messgae,'close', {duration: this.durationInSeconds});
  }

  ngOnInit(): void {
  }

  navToHome() {
    this.router.navigate(['/login']);
  }


  onSubmit() {
    if (this.forgetDto.newPassword != this.forgetDto.confirmPassword) {
      this.openSnackBar("New Password and Confirm Password should be same");
    }else {
      this.userService.resetPass(this.forgetDto , this.token).subscribe( (data:any) => { this.openSnackBar(data.responseMsg), this.navToHome()});
    }
  }
}
