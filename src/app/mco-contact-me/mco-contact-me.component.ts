import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {McoMail} from './mco-mail.model';

@Component({
  selector: 'mco-contact-me',
  templateUrl: './mco-contact-me.component.html',
  styleUrls: ['./mco-contact-me.component.scss']
})
export class McoContactMeComponent implements OnInit {
  isSuccess : boolean = false;
  currentTime: Date = new Date();
  senderForm : FormGroup;
  constructor(private db: AngularFireDatabase) {
    this.senderForm = new FormGroup({
      senderName: new FormControl('', [Validators.required]),
      emailAddress: new FormControl('', [Validators.required]),
      content: new FormControl('', [Validators.required]),
      dateSent: new FormControl('')
    });

    setInterval(() => {
      this.currentTime = new Date();
    }, 1);
  }
  ngOnInit() {
  }
  onSubmit(){
    this.senderForm.controls["dateSent"].setValue(this.currentTime);
    this.db.list('/mail').push({ content: this.senderForm.value }).then(_ => {
       this.senderForm.reset();
       this.isSuccess = true;
    });
  }
}
