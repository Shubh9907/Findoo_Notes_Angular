import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Note } from 'src/app/note';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {

  notes!: Note[];
  durationInSeconds = 5000;
  token = localStorage.getItem("data");
  displayButton = false;

  constructor(private userService: UserService, private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.getNotes();
  }

  openSnackBar(messgae: any) {
    this.snackBar.open(messgae, 'close', { duration: this.durationInSeconds });
  }

  longText = "Hello All";

  getNotes() {
    this.userService.getData("/notes").subscribe((data: any) => this.notes = data.data);
  }

  trashNote(id: number) {
    if (this.token != undefined) {
      this.userService.trashArchieveNote(id, "/trashNote", this.token).subscribe((data: any) => { this.openSnackBar(data.responseMsg) , this.getNotes()});
    }
  }

  archieveNote(id: number) {
    if (this.token != undefined) {
      this.userService.trashArchieveNote(id, "/archieveNote", this.token).subscribe((data: any) => { this.openSnackBar(data.responseMsg), this.getNotes() });
    }
  }

  deleteNote(id: number) {
    if (this.token != undefined) {
      this.userService.delete(id, "/note", this.token).subscribe((data: any) => this.openSnackBar(data.responseMsg));
    }
  }

}
