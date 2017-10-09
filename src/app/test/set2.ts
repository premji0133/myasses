import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { AuthenticationService } from '../services/login.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-set2',
  templateUrl: './set2.html',
  styleUrls: ['./set2.css']
})


export class Set2Component implements OnInit {
    
   ticks =0;
  i :number;
  answers = [ 'റാം', 'എ സി  കറന്റിനെ ഡി  സി ആക്കുക', 
             'എല്ലായ്പ്പോഴും മികച്ച ഉപഭോക്ത സേവനം നല്‍കണം ഇല്ലങ്കില്‍ പരാചയപ്പെടാം',
  'ഡിസ്ക്ക് യുണിറ്റ്','സിസ്റ്റത്തിലേക്കു പുതിയ ഗ്രാഫിക്സ് കാർഡ്  ചേർക്കും','ഓപ്പറേറ്റിംഗ് സിസ്റ്റം','ഐ ഡി ഇ','വി ജി എ',
             '5 വോൾട്ട്  ഡി സി','MOLEX / മോളെക്സ്','ഇവയെല്ലാം','അഡോബ് റീഡർ',
             'സിസ്റ്റം റോം','ലേസർ പ്രിൻറർ',
            'പവർ ഓൺ'];
   favoriteSeason: string[]=[];
  qes: number ;
     total : number = 0;
  
   seasons0 = [  'ഹാർഡ് ഡിസ്ക്','റാം','സി ഡി', 'ഫ്ലാഷ് ഡ്രൈവ്' ];
  seasons1 = [  'കണക്കു കൂട്ടലുകൾ ചെയ്യുക','എ സി  കറന്റിനെ ഡി  സി ആക്കുക','ഇൻപുട്ട്  സ്വീകരിക്കുക', 'ഇവയെല്ലാം' ];
  seasons2 = [ 'മോശം ഉപഭോക്ത സേവനത്തിലുടെ നഷ്ട്ടപ്പെടുന്ന ഉപഭോക്താക്കളെ തിരിച്ചുവരുത്താന്‍ എളുപ്പമാണ്','ഉപഭോക്ത്ത സേവനം ബോറിംഗ് ആണ്',
   'ശരാശരി ഉപഭോക്ത സേവനം തന്നെ ധാരാളം ആണ്','എല്ലായ്പ്പോഴും മികച്ച ഉപഭോക്ത സേവനം നല്‍കണം ഇല്ലങ്കില്‍ പരാചയപ്പെടാം'];
  seasons3 = ['ഡിസ്ക്ക് യുണിറ്റ്','കണ്ട്രോള്‍ യുണിറ്റ്','അരിത്‌മെറ്റിക്‌ ആൻഡ്  ലോജിക് യൂണിറ്റ്','മോഡം'];  
   seasons4 = ['സിസ്റ്റത്തിലേക്കു പുതിയ പവർ സപ്ലൈ ചേർക്കും','സിസ്റ്റത്തിലേക്കു പുതിയ റാം  ചേർക്കും','സിസ്റ്റത്തിലേക്കു പുതിയ ഗ്രാഫിക്സ് കാർഡ്  ചേർക്കും',
                'സിസ്റ്റത്തിലേക്കു പുതിയ പ്രോസസ്സർ ചേർക്കും'];
 
  seasons5 = ['സിസ്റ്റം റോം','പവർ സപ്ലൈ','സിസ്റ്റം ചേസിസ്','ഓപ്പറേറ്റിംഗ് സിസ്റ്റം'];
  seasons6 = ['സാറ്റ','ഐ ഡി ഇ','സ്കസി','ഇവയെല്ലാം'];
  seasons7 = ['ഐ ഡി ഇ','ആർ ജെ 45','സാറ്റ','വി ജി എ'];
  seasons8 = ['3.3  വോൾട്ട്  ഡി സി','12 വോൾട്ട്  ഡി സി ','5 വോൾട്ട്  ഡി സി','230 വോൾട്ട്  എ  സി'];
  seasons9 = ['DIMM SLOT / ഡിം  സ്ലോട്ട്','PCI / പി സി ഐ ', 'AGP / എ ജി പി', 'MOLEX / മോളെക്സ്'];
  seasons10 =['കൃത്യ നിഷ്ട്ട','പ്രൊഫഷണലിസം','സമർപ്പണം','ഇവയെല്ലാം'];
   seasons11 = ['അഡോബ് റീഡർ','ഉബുണ്ടു','വിൻഡോസ്','ആൻഡ്രോയിഡ്'];
  seasons12 = ['ഹാർഡ് ഡിസ്ക്','സിസ്റ്റം റോം', 'റാം', 'സിസ്റ്റം ചേസിസ്'];
  seasons13 = ['ലേസർ പ്രിൻറർ','മൗസ്',
               'കീബോർഡ്','ബാർ കോഡ് റീഡർ'];
  
   seasons14 = ['ഗ്രൗണ്ട്','-5 വോൾട്ട്  ഡിസി','പവർ ഓൺ',
                '12 വോൾട്ട്  ഡിസി'];
  
   
  
  constructor( private router: Router,  private As: AuthenticationService) {   }
  ngOnInit()  {
   let timer = Observable.timer(2000,1000);
          timer.subscribe(t=> {
        this.func(t);
  });
    this.qes = 1;
  }
  func(c:any)
  {
    this.ticks = c;
    if (this.ticks == 720)
    {
      this.res();
    }

  }
 login() {
   
   console.log('insisi');
   
 }
  next()
  {  
    this.qes++
  }
  prev()
  {  
    this.qes = this.qes-1;
  }
  res()
  {
     console.log(this.favoriteSeason);
                              this.total=0;
                           for(this.i=0;this.i<14;this.i++)
                           {

                             console.log(this.answers[this.i]);
                             console.log(this.favoriteSeason[this.i]);
                              if(this.answers[this.i] === this.favoriteSeason[this.i])
                              {
                                this.total++;
                              }
                           }

   
     this.As.col_tot(this.total);
      
      this.router.navigate(['/end']);

  }


  }
