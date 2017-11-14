import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { AuthenticationService } from '../../services/login.service';
import { fedd } from './feddmodel';

@Component({
  selector: 'app-submit',
  templateUrl: './sub_page.html',
  styleUrls: ['./set1.css']
})

export class SubmitComponent implements OnInit {
  total : number;
 names : string ;
  myForm: FormGroup; 
  qs = 0;
  model = new fedd('',0,0);
  disabled : boolean= true;
  isclicked : boolean= false;
  constructor( private router: Router,private fb: FormBuilder, private aS: AuthenticationService) {   }
  ngOnInit()  {
    this.isclicked=false;
   this.myForm = this.fb.group({
            names: '',
            testnum : 1,
            mark: 0
                  
                                      });

  }
   
 submit()
  {
     this.disabled = false;
     this.total=this.aS.get_total();
     this.names=this.aS.get_username();
     this.myForm.patchValue({names: this.names  });
     this.myForm.patchValue({mark: this.total  });
     this.model = this.myForm.value;
     this.aS.submit(this.myForm.value)
      .subscribe(data => { 
                    
                     
                      this.router.navigate(['/dash']);
                     
                },
                
                error => {
                    this.router.navigate(['/']);
                    
                });
    
  }
    
}
