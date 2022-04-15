import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { TumanComponent } from './tuman/tuman.component';
import { UsersComponent } from './users/users.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from '@angular/router';
import { RequestComponent } from './request/request.component';
import { TashkilotComponent } from './tashkilot/tashkilot.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { ViloyatComponent } from './viloyat/viloyat.component';
import { MahallaComponent } from './mahalla/mahalla.component';
import { SektorComponent } from './sektor/sektor.component';
import { MaterialModule } from './../../shared/material/material.module';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    TumanComponent,
    UsersComponent,
    ProfileComponent,
    RequestComponent,
    TashkilotComponent,
    SubjectsComponent,
    ViloyatComponent,
    MahallaComponent,
    SektorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    RouterModule,
    MaterialModule,
    MatCardModule
    
  ]
})
export class EntityModule { }
