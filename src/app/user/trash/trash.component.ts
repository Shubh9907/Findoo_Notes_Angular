import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Note } from 'src/app/note';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {

  notes!: Note[];
  durationInSeconds = 5000;
  token = localStorage.getItem("data");
  display = false;

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

  deleteNote(id: number) {
    if (this.token != undefined) {
      this.userService.delete(id, "/note", this.token).subscribe((data: any) => { this.openSnackBar(data.responseMsg), this.getNotes()});
    }
  }

}
