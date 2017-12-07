import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { DashComponent } from './dash/dash';
import { NgModule } from '@angular/core';
import { Set1Component } from './test/set1';
import { Set2Component }from './test/set2';
import { Tables }from './table/markstable';
import { AuthGuard } from './services/auth.guard';
import { AdduserComponent } from './dash/adduser';
import { AeSet1Component } from './test/ae/test1';
import { SubmitComponent  } from './test/ae/sub_page';
import { SelectExam } from './test/sel_test';
export const routes: Routes = [ 
    { path:'', redirectTo: '/login', pathMatch: 'full' },
    { path: '', component: LoginComponent},
    { path: 'login', component: LoginComponent },
    { path: 'dash', component: DashComponent, , canActivate: [AuthGuard] },
    { path: 'marks', component: Tables },
    { path: 'select-exam', component: SelectExam, canActivate: [AuthGuard] },
    {path: 'set1', component: Set1Component,canActivate: [AuthGuard]   },
     {path: 'set2', component: Set2Component, canActivate: [AuthGuard]   },
    {path: 'add-user',component: AdduserComponent },
     {path: 'aetest1',component: AeSet1Component, canActivate: [AuthGuard]  },
     {path: 'end',component: SubmitComponent, canActivate: [AuthGuard]  },
 
   
  
      
];
@NgModule({
 
  imports: [ RouterModule.forRoot(routes, { useHash : true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
