import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-admin-dashboard',
  templateUrl: './admin-admin-dashboard.component.html',
  styleUrls: ['./admin-admin-dashboard.component.css']
})
export class AdminAdminDashboardComponent implements OnInit {

  hide = true;
  mode = new FormControl('over');
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  irANuevoCliente() {

    this.router.navigate(['/admin-administrador-cliente'])

  }

  irANuevoCambioDeDatos() {

    this.router.navigate(['/admin-administrador-chat'])

  }

}
