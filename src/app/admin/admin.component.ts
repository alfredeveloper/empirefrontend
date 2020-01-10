import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

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
