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
  views : number = 0;
  ki :  mark[] =[] ;
  pardata : mark[]= [new mark(0,'',1,0)];
  displayedColumns = ['NAME', 'TESTNUM', 'MARK'];
  dataSource = new MatTableDataSource<mark>(this.getval());
  constructor(private ds : DataService ) { }
  
  
 getdata() : void{
      this.ds.getmarks().then(parsedata=> this.pardata = parsedata )
     
   }
  
  viewdata() : void{ 
                      
                     this.views = 1;       
                     console.log('data==',this.pardata);
                      
                   }
getval() 
  {
    this.getdata(); 
   return this.pardata; 
  }


  ngOnInit()  { 
                 this.getdata();        
                
              }

}



  
  

