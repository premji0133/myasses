import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { DashComponent } from './dash/dash';
import { NgModule } from '@angular/core';
import { Set1Component } from './test/set1';
import { Set2Component }from './test/set2';
import { Tables }from './table/markstable';

import { AdduserComponent } from './dash/adduser';
import { AeSet1Component } from './test/ae/test1';
import { SubmitComponent  } from './test/ae/sub_page';
import { SelectExam } from './test/sel_test';
export const routes: Routes = [ 
    { path:'', redirectTo: '/login', pathMatch: 'full' },
    { path: '', component: LoginComponent},
    { path: 'login', component: LoginComponent },
    { path: 'dash', component: DashComponent },
    { path: 'marks', component: Tables },
    { path: 'select-exam', component: SelectExam },
    {path: 'set1', component: Set1Component },
     {path: 'set2', component: Set2Component  },
    {path: 'add-user',component: AdduserComponent },
     {path: 'aetest1',component: AeSet1Component },
     {path: 'end',component: SubmitComponent },
 
   
  
      
];
@NgModule({
 
  imports: [ RouterModule.forRoot(routes, { useHash : true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
