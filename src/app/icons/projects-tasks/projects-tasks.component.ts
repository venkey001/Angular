import { Component, OnInit, NgModule, ViewContainerRef } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.component';
import { NgForm } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr'; 
import * as $ from 'jquery';
import { TimeTrackService } from '../time-track.service';
import { TaskModel, ProjectModel } from '../TIme-modals';

@Component({
  selector: 'app-projects-tasks',
  templateUrl: './projects-tasks.component.html',
  styleUrls: ['./projects-tasks.component.scss']
})
export class ProjectsTasksComponent implements OnInit {

  tasks : TaskModel[];
  constructor(public timeService : TimeTrackService, public toastr: ToastsManager, vcr: ViewContainerRef) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form? : NgForm) {
    this.timeService.task = {
      id : null,
      taskId : '',
      taskName : '',
      startDate : null,
      endDate : null,
      description : '',
      plannedHours : null,
      project : new ProjectModel()
    };
  }

  test(type) {
    if($('.TASK').hasClass('active'))
    {
      $('#taskModalId').show();
      $('#projectModalId').hide();
    }
    else
    {
      $('#projectModalId').show();
      $('#taskModalId').hide();
    }
  }
}
