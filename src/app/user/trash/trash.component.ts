import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/note';
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {

  notes!: Note[];
  token = localStorage.getItem("data");

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.getNotes();
  }

  getNotes() {
    if (this.token != undefined) {
      this.userService.getData("/notes", this.token).subscribe((data: any) => this.notes = data.data);
    }
  }

}
