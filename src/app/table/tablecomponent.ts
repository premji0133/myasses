import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {marks} from '../services/mock';
import { DataService } from '../services/data.service';

@Component({
  selector: 'table-basic-example',
  styleUrls: ['tablecomponent.css'],
  templateUrl: 'tablecomponent.html',
})
export class TableBasicExample implements OnInit{
  
  ki :  mark[] =[];
  
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<marks>(ELEMENT_DATA);
  
  constructor(private ds : DataService ) { }
  
  
 getdata() : void{
      this.ds.getmarks().then(parsedata=> this.ki = parsedata )
      console.log('data==',this.ki);
   }


  ngOnInit()  { 
    
    this.getdata();

    }


export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
// const ELEMENT_DATA1: Element[] = this.ds.getmarks();


const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
   {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];
