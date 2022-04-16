import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tashkilot',
  templateUrl: './tashkilot.component.html',
  styleUrls: ['./tashkilot.component.scss']
})
export class TashkilotComponent implements OnInit {

  constructor() { }

  
  cards = new Array(8).fill({body: ''});

  ngOnInit(): void {
    this.cards[0] = { body: 'Hudud gaz taminot',phone:'+998998876655'}
    this.cards[1] = { body: 'Elektr taminoti',phone:'+998998876644'}
    this.cards[2] = { body: 'Huquq tartibot idorasi',phone:'+998998876644'}
    this.cards[3] = { body: 'Davalat soiq qumitasi',phone:'+998998876633'}
    this.cards[4] = { body: 'Suv taminoti',phone:'+998998876655'}
    this.cards[5] = { body: 'Ekotrans',phone:'+998998876644'}
    this.cards[6] = { body: 'Sogliqni saqlash',phone:'+998998876644'}
    this.cards[7] = { body: 'Kadastr',phone:'+998998876633'}
  }
}