import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-admin-client-help',
  templateUrl: './admin-client-help.component.html',
  styleUrls: ['./admin-client-help.component.css']
})
export class AdminClientHelpComponent implements OnInit {

  hide = true;
  mode = new FormControl('over');
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  
  constructor() { }

  ngOnInit() {
  }

}
