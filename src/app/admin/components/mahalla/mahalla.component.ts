import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mahalla',
  templateUrl: './mahalla.component.html',
  styleUrls: ['./mahalla.component.scss']
})
export class MahallaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  data = {
    labels: ['Faol arizalar', 'Ijobiy xal bolgan', 'Muddati otgan', 'Korilmagan'],
    datasets: [{
      backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
      data: [40, 20, 80, 10]
    }]
  };
}
