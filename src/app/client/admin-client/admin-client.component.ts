import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

export interface PeriodicElement {
  Ticket: string;
  Fecha_Apertura: string;
  Tipo: string;
  Lots: string;
  Item: string;
  Precio: string;
  S_L: string;
  T_P: string;
  Fecha_Cierre: string;
  Precio_Cierre: string;
  Comisión: string;
  R_O_Swap: string;
  Trade_P_L: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Ticket: "aaa", Fecha_Apertura: 'Andres', Tipo: 'Valenzuela', Lots: '45235445', Item: '45235445', Precio: '45235445', S_L: '45235445', T_P: '45235445', Fecha_Cierre: '45235445', Precio_Cierre: '45235445', Comisión: '45235445', R_O_Swap: '45235445', Trade_P_L: '45235445'},
  {Ticket: "aaa", Fecha_Apertura: 'Andres', Tipo: 'Valenzuela', Lots: '45235445', Item: '45235445', Precio: '45235445', S_L: '45235445', T_P: '45235445', Fecha_Cierre: '45235445', Precio_Cierre: '45235445', Comisión: '45235445', R_O_Swap: '45235445', Trade_P_L: '45235445'},
  {Ticket: "aaa", Fecha_Apertura: 'Andres', Tipo: 'Valenzuela', Lots: '45235445', Item: '45235445', Precio: '45235445', S_L: '45235445', T_P: '45235445', Fecha_Cierre: '45235445', Precio_Cierre: '45235445', Comisión: '45235445', R_O_Swap: '45235445', Trade_P_L: '45235445'},
  {Ticket: "aaa", Fecha_Apertura: 'Andres', Tipo: 'Valenzuela', Lots: '45235445', Item: '45235445', Precio: '45235445', S_L: '45235445', T_P: '45235445', Fecha_Cierre: '45235445', Precio_Cierre: '45235445', Comisión: '45235445', R_O_Swap: '45235445', Trade_P_L: '45235445'},
  {Ticket: "aaa", Fecha_Apertura: 'Andres', Tipo: 'Valenzuela', Lots: '45235445', Item: '45235445', Precio: '45235445', S_L: '45235445', T_P: '45235445', Fecha_Cierre: '45235445', Precio_Cierre: '45235445', Comisión: '45235445', R_O_Swap: '45235445', Trade_P_L: '45235445'},
  
];

@Component({
  selector: 'app-admin-client',
  templateUrl: './admin-client.component.html',
  styleUrls: ['./admin-client.component.css']
})
export class AdminClientComponent implements OnInit {
  
  displayedColumns: string[] = ['Ticket', 'Fecha_Apertura', 'Tipo', 'Lots', 'Item', 'Precio', 'S_L', 'T_P', 'Fecha_Cierre', 'Precio_Cierre', 'Comisión', 'R_O_Swap', 'Trade_P_L'];
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

  hide = true;
  mode = new FormControl('over');
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  
  animal: string;
  name: string;

  
  constructor(
    
  ) { }

  ngOnInit() {
  }

  IniciarRegistro() {


  }

}
