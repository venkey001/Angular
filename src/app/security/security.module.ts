import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SecurityService } from './security.service';
import { HttpModule } from '@angular/http'
import { CommonModule } from '@angular/common';

//ModuleFeature Component
import { ModuleFeatureComponent } from './modulefeature.component';

//Security routing
import { SecurityRoutingModule } from './security-routing.module';
import { Configuration } from '../common/app.constants';

@NgModule({
  imports: [ 
    SecurityRoutingModule,
    FormsModule,
    CommonModule,
    HttpModule
   ],
  declarations: [
    ModuleFeatureComponent
  ],
  providers : [
    SecurityService,
    Configuration
  ]
})
export class SecurityModule { }