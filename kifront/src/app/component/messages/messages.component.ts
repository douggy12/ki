import { MessageService } from './../../message.service';
import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public message: MessageService) { }

  ngOnInit() {
  }
  OnChanges() {
  }

}
