import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { EmployeeComponent } from './employee.component';
import { CardsComponent } from './cards.component';

// Forms Component
import { FormsComponent } from './forms.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { SocialButtonsComponent } from './social-buttons.component';
import { SwitchesComponent } from './switches.component';
import { TablesComponent } from './tables.component';

// Modal Component
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalsComponent } from './modals.component';

// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TabsComponent } from './tabs.component';

// Components Routing
import { ComponentsRoutingModule } from './components-routing.module';
import { OrgnizationService } from './orgnization.service';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { Configuration } from '../common/app.constants';

@NgModule({
  imports: [
    ComponentsRoutingModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule,
    FormsModule,
    CommonModule,
    HttpModule
  ],
  declarations: [
    EmployeeComponent,
    CardsComponent,
    FormsComponent,
    ModalsComponent,
    SocialButtonsComponent,
    SwitchesComponent,
    TablesComponent,
    TabsComponent
  ],
  providers: [
    OrgnizationService,
    Configuration
  ]
})
export class ComponentsModule { }
