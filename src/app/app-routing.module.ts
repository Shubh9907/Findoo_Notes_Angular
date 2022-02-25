import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component'
import { RegisterComponent } from './user/register/register.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { DashboardComponent } from './user/dashboard/dashboard.component'
import { AuthGuard } from './auth.guard'
import { NotesComponent } from './user/notes/notes.component';
import { TrashComponent } from './user/trash/trash.component';
import { ArchiveComponent } from './user/archive/archive.component';

const routes: Routes = [
  {
    path:"login",
    component:LoginComponent
  },
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"dashboard",
    component:DashboardComponent,
    canActivate: [AuthGuard],
    children:[
      {
        path:"notes",
        component:NotesComponent
      },
      {
        path: "",
        redirectTo: "notes",
        pathMatch: "full"
      },
      {
        path:"trash",
        component:TrashComponent
      },
      {
        path:"archive",
        component:ArchiveComponent
      }
    ]
  },
  {
    path:"**",
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
