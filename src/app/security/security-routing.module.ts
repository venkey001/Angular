import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModuleFeatureComponent } from './modulefeature.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Security'
    },
    children: [
      {
        path: 'modulefeature',
        component: ModuleFeatureComponent,
        data: {
          title: 'Buttons'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule {}
