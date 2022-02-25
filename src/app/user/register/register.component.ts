import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDto } from 'src/app/user-dto';
import { UserService } from 'src/app/user.service';
import { MatSnackBar } from '@angular/material/snack-bar'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: UserDto = new UserDto();
  durationInSeconds = 5000;

  constructor(private userService: UserService,
    private router: Router,private snackBar: MatSnackBar) { }

    openSnackBar(messgae: any) {
      this.snackBar.open(messgae,'close', {duration: this.durationInSeconds});
    }

  hide = true;

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.postRequest(this.user, "/user").subscribe( (data:any) => { this.openSnackBar(data.responseMsg), this.router.navigate(['/'])});
    }


  
}

