import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { UserService } from "src/app/user.service";


@Component({
  selector: 'app-edit-note-dialog-box',
  templateUrl: './edit-note-dialog-box.component.html',
  styleUrls: ['./edit-note-dialog-box.component.scss']
})
export class EditNoteDialogBoxComponent implements OnInit {

  durationInSeconds = 5000;
  token = localStorage.getItem("data");
  tempTitle: string = this.data.title;
  tempBody: string = this.data.noteBody;


  constructor(
    public dialogRef: MatDialogRef<EditNoteDialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private snackBar: MatSnackBar, private userService: UserService
  ) {}

  openSnackBar(messgae: any) {
    this.snackBar.open(messgae, 'close', { duration: this.durationInSeconds });
  }

  onNoClick(): void {
    this.updateNote();
    this.dialogRef.close();
  }

  closeDialog() {
    this.data.title = this.tempTitle;
    this.data.noteBody = this.tempBody;
    this.updateNote();
    this.dialogRef.close();
  }

  setNoteColor( color: string) {
    this.data.noteColor = color;
  }

  ngOnInit(): void {
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

  updateNote() {
    this.userService.editNote(this.data.id, this.data).subscribe((data:any) => {
      this.openSnackBar(data.responseMsg), setTimeout(function () {
        window.location.reload()
      }, 1000);
    });
  }
}
