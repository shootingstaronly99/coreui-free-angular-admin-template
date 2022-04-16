import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elon',
  templateUrl: './elon.component.html',
  styleUrls: ['./elon.component.scss']
})
export class ElonComponent implements OnInit {

  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  constructor() { }

  ngOnInit(): void {
    this.slides[0] = {
      id: 0,
      src: '../../../../assets/img/market.jpg',
      title: "Yangi do'kon",
      subtitle: 'Mahallada yangi savdo majmuasi'
    };
    this.slides[1] = {
      id: 1,
      src: '../../../../assets/img/mans/svarchik.jpg',
      title: 'Ikkinchi',
      subtitle: 'Payvandchi ishga olamiz'
    }
    this.slides[2] = {
      id: 2,
      src: '../../../../assets/img/mans/qorovul.jpg',
      title: '3 rasm',
      subtitle: 'Qorovul kerak'
    }
  }
}
