import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

export interface PeriodicElement {
  Nombres: string;
  Correo: string;
  Apellidos: string;
  DNI: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Correo: "cliente@email.com", Nombres: 'Andres', Apellidos: 'Valenzuela', DNI: '45235445'},
  {Correo: "cliente@email.com", Nombres: 'Helium', Apellidos: 'Valenzuela', DNI: '45235445'},
  {Correo: "cliente@email.com", Nombres: 'Lithium', Apellidos: 'Valenzuela', DNI: '45235445'}
]

@Component({
  selector: 'app-admin-admin',
  templateUrl: './admin-admin.component.html',
  styleUrls: ['./admin-admin.component.css']
})
export class AdminAdminComponent implements OnInit {

  displayedColumns: string[] = ['Nombres', 'Apellidos', 'DNI', 'Correo'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  data: PeriodicElement[] = ELEMENT_DATA;

  addColumn() {
    const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
    this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
  }

  removeColumn() {
    if (this.columnsToDisplay.length) {
      this.columnsToDisplay.pop();
    }
  }

  shuffle() {
    let currentIndex = this.columnsToDisplay.length;
    while (0 !== currentIndex) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // Swap
      let temp = this.columnsToDisplay[currentIndex];
      this.columnsToDisplay[currentIndex] = this.columnsToDisplay[randomIndex];
      this.columnsToDisplay[randomIndex] = temp;
    }
  }

  irANuevoCliente() {

    this.router.navigate(['/admin-administrador-cliente'])

  }

  irANuevoCambioDeDatos() {

    this.router.navigate(['/admin-administrador-chat'])

  }

  hide = true;
  mode = new FormControl('over');
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  
  animal: string;
  name: string;
  
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

}
