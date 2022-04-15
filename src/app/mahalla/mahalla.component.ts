import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { navItems } from './_nav';
import { Mahalla } from '../shared/model/mahalla';
import { MahallaService } from '../shared/service/mahalla.service';

@Component({
  selector: 'app-mahalla',
  templateUrl: './mahalla.component.html',
  styleUrls: ['./mahalla.component.scss']
})
export class MahallaComponent implements OnInit {
  public navItems = navItems;

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };
  mahallaId!: number;
  mahalla!: Mahalla;
  constructor(private activatedRoute: ActivatedRoute,
    private mahallaService: MahallaService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      if(data && data['id']){
        this.mahallaId = data['id'];
        this.loadMahalla();
      }
    })
  }
  loadMahalla() {
    this.mahallaService.getById(this.mahallaId).subscribe(mahalla=>{
      this.mahalla = mahalla;
      this.init();
    },
    error=>{
      setTimeout(this.loadMahalla, 1000);
    });
    
  }
  init() {
   // TODO mahallaga oid xabarlar o'qib kelinadi


  }

}
