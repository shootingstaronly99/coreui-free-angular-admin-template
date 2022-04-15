import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../users/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  sorovBajarilmoqda = false;
  createForm: any;
  user:any;
  constructor(
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private usersService:UserService
  ) {
  }
  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      id: [{ value: '', disabled: true }],
      ism: [null, Validators.required],
      familiya: [null, Validators.required],
      sharif: [null, Validators.required],
      login: [{value:'',disabled:true}],
      eskiParol: [null, Validators.required],
      parol: [null, Validators.required]
    });
  }
  ngAfterViewInit(): void {
    this.usersService.getUser().subscribe((data: any) => {
      this.user = data;
      this.createForm.reset(data);
    });
  }
  save(): void {
    const user = this.createForm.getRawValue();
    this.sorovBajarilmoqda = true;
    this.usersService.update(user).subscribe(
      (success: any) => {
        this.createForm.reset();
        this.sorovBajarilmoqda = false;
        this.ngAfterViewInit();
      },
      (error:any) => {
        let message = "Xatoli ro'y berdi";
        if (error.error.message) {
          message = error.error.message;
        }
        this.sorovBajarilmoqda = false;
      },
    );
  }
}
