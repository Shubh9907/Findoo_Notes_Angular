import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Note } from 'src/app/note';
import { UserService } from 'src/app/user.service';
import { EditNoteDialogBoxComponent } from '../edit-note-dialog-box/edit-note-dialog-box.component';

@Component({
  selector: 'app-trash-view',
  templateUrl: './trash-view.component.html',
  styleUrls: ['./trash-view.component.scss']
})
export class TrashViewComponent implements OnInit {

  @Input() note!: Note;
  durationInSeconds = 5000;
  token = localStorage.getItem("data");
  display = false;

  constructor(private userService: UserService, private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  openSnackBar(messgae: any) {
    this.snackBar.open(messgae, 'close', { duration: this.durationInSeconds });
  }

  longText = "Hello All";

  deleteNote(id: string) {
    if (this.token != undefined) {
      this.userService.delete(id, "/note", this.token).subscribe((data: any) => { this.openSnackBar(data.responseMsg), window.location.reload() });
    }
  }

  restoreNote(id: string) {
    if (this.token != undefined) {
      this.userService.trashArchieveNote(id, "/trashNote", this.token).subscribe((data: any) => { this.openSnackBar(data.responseMsg), window.location.reload() });
    }
  }
}
