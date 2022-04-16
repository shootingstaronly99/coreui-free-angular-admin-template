import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public activePage = 2;

  setActivePage(page: number) {
    this.activePage = page;
  }
}
