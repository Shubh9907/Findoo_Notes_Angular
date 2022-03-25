import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MatButtonModule } from '@angular/material/button'
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
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatMenuModule} from '@angular/material/menu';
import { NoteViewComponent } from './note-view/note-view.component';
import { PinnedNoteViewComponent } from './pinned-note-view/pinned-note-view.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SearchedNoteComponent } from './searched-note/searched-note.component';
import { TrashViewComponent } from './trash-view/trash-view.component';
import { ArchiveViewComponent } from './archive-view/archive-view.component';
import { EditNoteDialogBoxComponent } from './edit-note-dialog-box/edit-note-dialog-box.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    NoteCardComponent,
    TrashComponent,
    NotesComponent,
    ArchiveComponent,
    NoteViewComponent,
    PinnedNoteViewComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    SearchedNoteComponent,
    TrashViewComponent,
    ArchiveViewComponent,
    EditNoteDialogBoxComponent,
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
    MatButtonModule,
    MatDatepickerModule,
    MatMenuModule,
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ]
})
export class UserModule { }
