import { Component, OnInit } from '@angular/core';
import { NoteDto } from 'src/app/note-dto';
import { UserService } from 'src/app/user.service';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Router } from '@angular/router';
import { Note } from 'src/app/note';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  datepicker = "";
  notes!: Note[];
  searchedNotes!: Note[];
  note: NoteDto = new NoteDto();
  token = localStorage.getItem("data");
  durationInSeconds = 5000;
  searchKey!: string;

  constructor(private userService: UserService, private snackBar: MatSnackBar, private router: Router) {
  }

  getSearchResult() {
    if (this.token != undefined) {
      this.userService.searchNotes(this.searchKey, this.token).subscribe((data: any) => this.searchedNotes = data.data);
    }
    console.log(this.searchedNotes);
  }

  ngOnInit(): void {
  }

  openSnackBar(messgae: any) {
    this.snackBar.open(messgae, 'close', { duration: this.durationInSeconds });
  }

  logout() {
    console.log("OnLogout");
    localStorage.removeItem("data");
    this.router.navigate(["/"]);
  }

  onSubmit() {
    if (this.token != undefined) {
      this.userService.postNote(this.note, this.token, "/note").subscribe((data: any) => { this.openSnackBar(data.responseMsg), window.location.reload() });
    }
  }

  getNotes() {
    if (this.token != undefined) {
      this.userService.getData("/notes", this.token).subscribe((data: any) => this.notes = data.data);
    }
  }

  setColor(color: string) {
    this.note.noteColor = color;
  }
}
