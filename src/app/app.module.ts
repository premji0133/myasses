import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AdduserComponent } from './dash/adduser';
import { AppRoutingModule } from './app.router';
import { DashComponent } from './dash/dash';
import { LoginComponent } from './login/login';
import { Set1Component } from './test/set1';
import { SubmitComponent } from './test/ae/sub_page';
import { AeSet1Component } from './test/ae/test1';
import {ReactiveFormsModule} from "@angular/forms";
import {AuthenticationService} from'./services/login.service';
import { SelectExam } from './test/sel_test';
import { Set2Component } from './test/set2';
import { Tables } from './table/markstable';

import { TableBasicExample } from './table/tablecomponent';
import {CdkTableModule} from '@angular/cdk/table'
import {OverlayModule} from '@angular/cdk/overlay';
import 'hammerjs';
import 'core-js/es6/reflect';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import 'web-animations-js';

 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; 

import {
    MatAutocompleteModule,  MatButtonModule,  MatButtonToggleModule,  MatCardModule,  MatCheckboxModule,  MatChipsModule,  MatDatepickerModule,
  MatDialogModule,  MatExpansionModule,  MatGridListModule,  MatIconModule,  MatInputModule,  MatListModule,  MatMenuModule,  MatNativeDateModule,
  MatProgressBarModule,  MatProgressSpinnerModule,  MatRadioModule,  MatRippleModule,  MatSelectModule,  MatSidenavModule,  MatSliderModule,
  MatSlideToggleModule,  MatSnackBarModule,  MatTabsModule,  MatToolbarModule,  MatTooltipModule,  MatSortModule,  MatPaginatorModule
} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,LoginComponent,TableBasicExample,DashComponent,Set1Component,AdduserComponent,Tables,AeSet1Component,SubmitComponent,SelectExam,Set2Component
  ],
       providers: [ AuthenticationService ],
  imports: [
    BrowserModule,BrowserAnimationsModule,
   ReactiveFormsModule,
    FormsModule,
    HttpModule,
     CdkTableModule,    OverlayModule,
    MatAutocompleteModule,    MatButtonModule,    MatButtonToggleModule,    MatCardModule,    MatCheckboxModule,    
   MatChipsModule,    MatDatepickerModule,    MatDialogModule,    MatExpansionModule,    MatGridListModule,    MatIconModule, 
   MatInputModule,    MatListModule,    MatMenuModule,   MatProgressBarModule,    MatProgressSpinnerModule,    MatRadioModule,   
   MatRippleModule,    MatSelectModule,    MatSidenavModule,    MatSlideToggleModule,    MatSliderModule,    MatSnackBarModule,
   MatTabsModule,    MatToolbarModule,    MatTooltipModule,    
    MatNativeDateModule,    MatSortModule,
    MatPaginatorModule,
  
    
    AppRoutingModule
    
  ],
 
 
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
