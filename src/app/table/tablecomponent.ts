import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {users} from './services/mock';

@Component({
  selector: 'table-basic-example',
  styleUrls: ['tablecomponent.css'],
  templateUrl: 'tablecomponent.html',
})
export class TableBasicExample implements OnInit{
  
  
  
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<users>(ELEMENT_DATA);
}


export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}




const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
   {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];
