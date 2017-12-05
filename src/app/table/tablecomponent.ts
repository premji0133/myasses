import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {mark} from '../services/mock';

import { DataService } from '../services/data.service';

@Component({
  selector: 'table-basic-example',
  styleUrls: ['tablecomponent.css'],
  templateUrl: 'tablecomponent.html',
})
export class TableBasicExample implements OnInit{
  
  ki :  mark[] =[] ;
  pardata : mark[]= [new mark(0,'',1,0)];
  displayedColumns = ['ID', 'NAME', 'TESTNUM', 'MARK'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  
  constructor(private ds : DataService ) { }
  
  
 getdata() : void{
      this.ds.getmarks().then(parsedata=> this.pardata = parsedata )
      console.log('data==',this.pardata);
   }
  
  viewdata() : void{ 
                           
                     console.log('data==',this.pardata);
                      
                   }



  ngOnInit()  { 
                 this.getdata();        
                 this.viewdata();
              }

}
export interface Element {
       ID: number,
       NAME: string,
       TESTNUM: number,
       MARK: number
}



const ELEMENT_DATA: Element[] = [{"ID":126,"NAME":"Prems021","TESTNUM":1,"MARK":4},
  {"ID":125,"NAME":"Prems021","TESTNUM":1,"MARK":1}];


  
  

