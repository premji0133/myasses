import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { AuthenticationService } from '../services/login.service';
import { User } from '../dash/usermodel';
import { AuthGuard } from '../services/auth.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent implements OnInit {
 
  myForm: FormGroup;
  model = new User('','');
  isclicked : boolean= false;
  constructor( private router: Router,private fb: FormBuilder, private aS: AuthenticationService , private ag: AuthGuard) {   }
  ngOnInit()  {
    this.isclicked=false;
   this.myForm = this.fb.group({
            username: [''],
            password: ['']             
                                      });

  }
   
    login() {
   
  this.isclicked = true;
    this.aS.login(this.myForm.value)
    .subscribe(data => { 
                    
                      this.ag.token = true;
                      this.router.navigate(['/dash']);
                     
                },
                
                error => {
                    this.router.navigate(['/']);
                    
                });
   
        }
  }


