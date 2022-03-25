import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Note } from 'src/app/note';
import { UserService } from 'src/app/user.service';
import { EditNoteDialogBoxComponent } from '../edit-note-dialog-box/edit-note-dialog-box.component';

@Component({
  selector: 'app-pinned-note-view',
  templateUrl: './pinned-note-view.component.html',
  styleUrls: ['./pinned-note-view.component.scss']
})
export class PinnedNoteViewComponent implements OnInit {

  @Input() note!: Note;
  token = localStorage.getItem("data");
  durationInSeconds = 5000;
  displayButton = false;

  constructor(private userService: UserService, private snackBar: MatSnackBar,  public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openSnackBar(messgae: any) {
    this.snackBar.open(messgae, 'close', { duration: this.durationInSeconds });
  }

  trashNote(id: string) {
    if (this.token != undefined) {
      this.userService.trashArchieveNote(id, "/trashNote", this.token).subscribe((data: any) => {
        this.openSnackBar(data.responseMsg), setTimeout(function () {
          window.location.reload()
        }, 1000);
      });
    }
  }

  archieveNote(id: string) {
    if (this.token != undefined) {
      this.userService.trashArchieveNote(id, "/archieveNote", this.token).subscribe((data: any) => {
        this.openSnackBar(data.responseMsg), setTimeout(function () {
          window.location.reload()
        }, 1000);
      });
    }
  }

  pin(id: string) {
    if (this.token != undefined) {
      this.userService.pin(id, "/pinnote", this.token).subscribe((data: any) => {
        this.openSnackBar(data.responseMsg), setTimeout(function () {
          window.location.reload()
        }, 1000);
      });
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EditNoteDialogBoxComponent, {
      width: '40%',
      data: this.note
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
