import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mco-about-me',
  templateUrl: './mco-about-me.component.html',
  styleUrls: ['./mco-about-me.component.scss']
})
export class McoAboutMeComponent implements OnInit {
  yearsSinceGraduate : number;
  constructor() {
    this.yearsSinceGraduate = (new Date()).getFullYear() - 2015;
  }

  ngOnInit() {
  }

}
