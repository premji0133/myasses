import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { AuthGuard } from '../services/auth.guard';
@Component({
  selector: 'app-dash',
  templateUrl: './dash.html',
  styleUrls: ['./dash.css']
})
export class DashComponent implements OnInit {
  constructor( private router: Router private ag: AuthGuard) {   }
  ngOnInit()  {}
 login() { }
  logout()
  {
    this.ag.token=false;
  }
}
