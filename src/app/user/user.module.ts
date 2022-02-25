import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { NoteCardComponent } from './note-card/note-card.component';
import { MatCardModule } from '@angular/material/card'
import {MatSidenavModule} from '@angular/material/sidenav';
import { TrashComponent } from './trash/trash.component';
import { NotesComponent } from './notes/notes.component';
import { ArchiveComponent } from './archive/archive.component'
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    NoteCardComponent,
    TrashComponent,
    NotesComponent,
    ArchiveComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatCardModule,
    MatSidenavModule,
    RouterModule,
    MatButtonModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ]
})
export class UserModule { }
