import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-treasury',
  templateUrl: './treasury.component.html',
  styleUrls: ['./treasury.component.css']
})
export class TreasuryComponent implements OnInit {

  years: number[];

  constructor() { }

  ngOnInit() {
    const currentYear = new Date().getFullYear();
    this.years = [currentYear, currentYear-1, currentYear-2];
  }

}
