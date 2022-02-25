import { Component, OnInit } from '@angular/core';
import { NoteDto } from 'src/app/note-dto';
import { UserService } from 'src/app/user.service';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Router } from '@angular/router';
import { NoteCardComponent } from '../note-card/note-card.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  note: NoteDto = new NoteDto();
  token = localStorage.getItem("data");
  durationInSeconds = 5000;


  constructor(private userService: UserService, private snackBar: MatSnackBar, private router: Router) { }

  

  ngOnInit(): void {
  }

  openSnackBar(messgae: any) {
    this.snackBar.open(messgae,'close', {duration: this.durationInSeconds});
  }

  logout() {
    console.log("OnLogout");
    localStorage.removeItem("data");
    this.router.navigate(["/"]);
  }

  onSubmit(){
    if(this.token != undefined) {
    this.userService.postNote(this.note, this.token , "/note").subscribe( (data:any) => {  this.openSnackBar(data.responseMsg), window.location.reload() });
    }
  }
}
