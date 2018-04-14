import { NgModule } from '@angular/core';

import { FontAwesomeComponent } from './font-awesome.component';
import { SimpleLineIconsComponent } from './simple-line-icons.component';

import { IconsRoutingModule } from './icons-routing.module';
import { ProjectsTasksComponent } from './projects-tasks/projects-tasks.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TimeTrackService } from './time-track.service';
import { Configuration } from '../common/app.constants';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  imports: [ 
    IconsRoutingModule, 
    ModalModule.forRoot(),
    HttpModule,
    FormsModule,
    CommonModule,
    TabsModule
  ],
  declarations: [
    FontAwesomeComponent,
    SimpleLineIconsComponent,
    ProjectsTasksComponent
  ],
  providers : [
    TimeTrackService,
    Configuration
  ]
})
export class IconsModule { }
