import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {marks} from '../services/mock';
import {markk} from '../services/mock';
import { DataService } from '../services/data.service';

@Component({
  selector: 'table-basic-example',
  styleUrls: ['tablecomponent.css'],
  templateUrl: 'tablecomponent.html',
})
export class TableBasicExample implements OnInit{
  
  ki :  markk ;
  
  displayedColumns = ['ID', 'NAME', 'TESTNUM', 'MARK'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  
  constructor(private ds : DataService ) { }
  
  
 getdata() : void{
      this.ds.getmarks().then(parsedata=> this.ki = parsedata )
      console.log('data==',this.ki);
   }
  view() : void{
   this.dataSource = this.ki; 
  }

  ngOnInit()  { 
    
    this.getdata();
    this.view();

    }

}
export interface Element {
       ID: number,
      NAME: string,
     TESTNUM: number,
     MARK: number
}


const ELEMENT_DATA: Element[] = [
  {ID: 1, NAME: 'Hydrogen', TESTNUM: 1, MARK: 0}
  
];
