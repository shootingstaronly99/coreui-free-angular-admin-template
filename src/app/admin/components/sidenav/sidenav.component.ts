import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/core/account.service';
import { JwtUtil } from 'src/app/core/jwt.util';
import { Lavozim } from 'src/app/shared/model/lavozimlar';
import { User } from 'src/app/shared/model/user';
import { ViloyatService } from 'src/app/shared/service/viloyat.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  root = '';


  routes!: any[];
  creator = false;
  admin = false;
  roles!: string[];
  user!: User | null;

 constructor(public accountService: AccountService,
  public router: Router,
  public activatedRoute: ActivatedRoute,
  private jwtUtil: JwtUtil,
  private viloyatService: ViloyatService){

 }
  viloyatlar: any[] = []



  ngOnInit(): void {
    this.viloyatService.getAllFull().subscribe(data=>{
      this.viloyatlar = data;
      console.log(data);
      
    })
    
    this.accountService.getAuthenticationState().subscribe(
      data => {
    
        this.user = data;
          this.creator = this.accountService.hasAnyAuthority(Lavozim.SUPER_ADMIN);
          this.admin = this.accountService.hasAnyAuthority(Lavozim.ADMIN);
       
        }
    );
    // $('#tree3').treed({openedClass:'glyphicon-chevron-right', closedClass:'glyphicon-chevron-down'});
  }
  }


