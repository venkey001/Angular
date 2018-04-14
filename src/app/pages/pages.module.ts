import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { P404Component } from './404.component';
import { P500Component } from './500.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginService } from './login.service';
import { Configuration } from '../common/app.constants';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [ 
    PagesRoutingModule,
    FormsModule,
    CommonModule,
    HttpModule
   ],
  declarations: [
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent
  ],
  providers : [
    LoginService,
    Configuration
  ]
})
export class PagesModule { }
