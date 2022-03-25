import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Note } from 'src/app/note';
import { UserService } from 'src/app/user.service';



@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit, OnChanges {

  notes!: Note[];
  token = localStorage.getItem("data");

  constructor(private userService: UserService) {
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.getNotes();
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
