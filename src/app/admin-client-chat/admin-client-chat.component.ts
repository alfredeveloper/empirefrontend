import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-admin-client-chat',
  templateUrl: './admin-client-chat.component.html',
  styleUrls: ['./admin-client-chat.component.css']
})
export class AdminClientChatComponent implements OnInit {

  hide = true;
  mode = new FormControl('over');
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  
  constructor() { }

  ngOnInit() {
  }

}
