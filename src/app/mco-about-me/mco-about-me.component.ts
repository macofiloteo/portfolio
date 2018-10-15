import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'mco-about-me',
  templateUrl: './mco-about-me.component.html',
  styleUrls: ['./mco-about-me.component.scss']
})
export class McoAboutMeComponent implements OnInit {
  about_me : any;
  constructor(private db : AngularFireDatabase) {
  }

  ngOnInit() {
    this.about_me = this.db.list('/about_me').valueChanges().subscribe( data => {
      this.about_me = data[0];
    });;
  }
}
