import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Note } from 'src/app/note';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  notes!: Note[];
  token = localStorage.getItem("data");

  constructor(private userService: UserService, private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.getNotes();
  }

  getNotes() {
    if (this.token != null) {
      this.userService.getData("/notes", this.token).subscribe((data: any) => this.notes = data.data);
    }
  }

}
