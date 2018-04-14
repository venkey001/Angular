import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FontAwesomeComponent } from './font-awesome.component';
import { SimpleLineIconsComponent } from './simple-line-icons.component';
import { ProjectsTasksComponent } from './projects-tasks/projects-tasks.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Icons'
    },
    children: [
      {
        path: 'font-awesome',
        component: FontAwesomeComponent,
        data: {
          title: 'Font Awesome'
        }
      },
      {
        path: 'simple-line-icons',
        component: SimpleLineIconsComponent,
        data: {
          title: 'Simple Line Icons'
        }
      },
      {
        path: 'projects-Tasks',
        component: ProjectsTasksComponent,
        data: {
          title: 'Projects and Tasks'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IconsRoutingModule {}
