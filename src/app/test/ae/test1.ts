import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {Observable} from 'rxjs/Rx';
import { AuthenticationService } from '../../services/login.service';

import { SubmitComponent } from './sub_page';
@Component({
  selector: 'ae-set1',
  templateUrl: './set1.html',
  styleUrls: ['./set1.css']
})


export class AeSet1Component implements OnInit {
 
    favoriteSeason: string[]=[];
  
   i :number;
  
 
  seasons21 = ['സർവീസിന് പോകാൻ സാധിക്കില്ല എന്ന് സൂപ്പർവൈസറിനോട്  പറയും','മറ്റ്‌  എന്തെകിലും കാരണം പറഞ്ഞു ഒഴിവാകും','അഭിപ്രായ ഭിന്നതകൾ മാറ്റി വെച്ച് ഒരുമിച്ചു പ്രവൃത്തിക്കും','ജോലി രാജിവെക്കും '];
 
  
  constructor( private router: Router, private As: AuthenticationService) {   }
  ngOnInit()  {
    
  }


  
 
  
  
  }
