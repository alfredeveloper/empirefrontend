import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  hide = true;
  mode = new FormControl('over');
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  irAConfiguracion() {
    this.router.navigate(['/admin-cliente-configuration'])
  }

  cerrarSesion() {
    this.router.navigate(['/iniciar-sesion'])

  }

}
