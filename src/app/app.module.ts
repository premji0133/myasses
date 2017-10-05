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
import 'hammerjs';

 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; 

import {
  MdAutocompleteModule, MdButtonModule,  MdButtonToggleModule,  MdCardModule,   MdCheckboxModule,   MdChipsModule,
    MdDatepickerModule,  MdDialogModule,  MdExpansionModule,  MdGridListModule,  MdIconModule,  MdInputModule,
  MdListModule,  MdMenuModule,  MdNativeDateModule,  MdPaginatorModule,  MdProgressBarModule,  MdProgressSpinnerModule,  MdRadioModule,
  MdRippleModule,  MdSelectModule,  MdSidenavModule,  MdSliderModule,  MdSlideToggleModule,  MdSnackBarModule,  MdSortModule,
  MdTableModule,  MdTabsModule,  MdToolbarModule,  MdTooltipModule,
} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,LoginComponent,DashComponent,Set1Component,AdduserComponent,AeSet1Component,SubmitComponent,SelectExam,Set2Component
  ],
       providers: [ AuthenticationService ],
  imports: [
    BrowserModule,BrowserAnimationsModule,
   ReactiveFormsModule,
    FormsModule,
    HttpModule,
     MdAutocompleteModule, MdButtonModule,  MdButtonToggleModule,  MdCardModule,   MdCheckboxModule,   MdChipsModule,
    MdDatepickerModule,  MdDialogModule,  MdExpansionModule,  MdGridListModule,  MdIconModule,  MdInputModule,
  MdListModule,  MdMenuModule,  MdNativeDateModule,  MdPaginatorModule,  MdProgressBarModule,  MdProgressSpinnerModule,
  MdRadioModule,  MdRippleModule,  MdSelectModule,  MdSidenavModule,  MdSliderModule,  MdSlideToggleModule,  MdSnackBarModule,
  MdSortModule,  MdTableModule,  MdTabsModule,  MdToolbarModule,  MdTooltipModule,
    
    AppRoutingModule
    
  ],
 
 
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
