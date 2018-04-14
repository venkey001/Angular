import { Component, OnInit, NgModule, ViewContainerRef } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.component';
import { NgForm } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr';
import * as $ from 'jquery';
import { OrgnizationService } from './orgnization.service';
import { EmployeeModel, WorkExpModel, EducationModel, DependentModel } from './employee-model';

@Component({
  templateUrl: 'employee.component.html'
})
export class EmployeeComponent implements OnInit{
  
  public largeModal;
  employees : EmployeeModel[];
  constructor(public orgService : OrgnizationService, public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.resetForm();
    this.getEmployees();
  }

  resetForm(form? : NgForm) {
    if(form != null)
      form.reset();
    this.orgService.employee = {
      id : null,
      empId: '',
      firstName : '',
      lastName: '',
      nickName : '',
      email : '',
      department :'',
      location :'',
      reportTo : '',
      doj : null,
      srcofhire :'',
      empstatus : '',
      seatLocation : '',
      empType : '',
      workPhone : '',
      mobileNo : '',
      address : '',
      otheremail : '',
      dob : null,
      maritalstatus : '',
      jobDescp : '',
      aboutMe : '',
      doe : null,
      role : '',
      gender : '',
      workexp : [{
        id : null,
        companyName : '',
        jobTitle : '',
        fromDate : null,
        toDate : null,
        jobDescri : ''
      }],
      education : [{
        id : null,
        schoolName : '',
        degree : '',
        fieldofStudy : '',
        doc : null,
        additionalNotes : '',
        intersts : ''
      }],
      dependent : [{
        id : null,
        name : '',
        relationship : '',
        dob : null
      }]
    };
  }

  onSubmit(form: NgForm) {
    let employee = this.orgService.employee;
    let action = 'CREATE';
    if(module.id != undefined)
      action = 'EDIT';

    this.orgService.saveEmployee(employee)
      .subscribe(data => {
        if(action == 'CREATE')
          this.toastr.success("Employee details Successfully submitted.");
        else
          this.toastr.success("Employee details Successfully Updated.");
        this.resetForm(form);
        this.getEmployees();
      },
    error => {
      console.error(error);
      this.toastr.error("Unable to create or update Employee Details.");
    });
  }

  getEmployees() {
    this.orgService.getEmployees()
      .subscribe(data => {
        this.employees = data;
      },
    error => {
      console.error(error);
      this.toastr.error("Unable to fetch Records.");
    });
  }

  getEmployeeById(id) {
    this.orgService.getEmployeeById(id)
      .subscribe(data => {
        if(data.workexp.length == 0)
        {
          data.workexp = [{
            id : null,
            companyName : '',
            jobTitle : '',
            fromDate : null,
            toDate : null,
            jobDescri : ''
          }]
        }
        if(data.education.length == 0)
        {
          data.education = [{
            id : null,
            schoolName : '',
            degree : '',
            fieldofStudy : '',
            doc : null,
            additionalNotes : '',
            intersts : ''
          }]
        }
        if(data.dependent.length == 0)
        {
          data.dependent = [{
            id : null,
            name : '',
            relationship : '',
            dob : null
          }] 
        }

        this.orgService.employee = data;
      },
      error => {
        console.error(error);
        this.toastr.error("Unable to fetch Employee Details.");
      });
  }

  deleteEmployee(id) {
    this.orgService.deleteEmployee(id)
    .subscribe(
      data => {
        this.toastr.success("Employee Details Successfully Deleted.");
        this.getEmployees();
    },
    error => {
      this.toastr.error("Unable to delete. This record is refering somewhere else please check.");
    });
  }

  addRow(type) {
    if(type == "WORK")
    {
      let workExp : WorkExpModel;
      workExp = {
        id : null,
        companyName : '',
        jobTitle : '',
        fromDate : null,
        toDate : null,
        jobDescri : ''
      }
      this.orgService.employee.workexp.push(workExp);
    }

    else if (type == "EDU") {
      let education : EducationModel;
      education = {
        id : null,
        schoolName : '',
        degree : '',
        fieldofStudy : '',
        doc : null,
        additionalNotes : '',
        intersts : ''
      }
      this.orgService.employee.education.push(education);
    }
    else if(type == "DEPEN") {
      let dependent : DependentModel;
      dependent = {
        id : null,
        name : '',
        relationship : '',
        dob : null
      };
      this.orgService.employee.dependent.push(dependent);
    }
  }

  removeRow(index, type) {
    if(type == "WORK") {
      if(this.orgService.employee.workexp.length == 1) {
        this.orgService.employee.workexp[index] = {
          id : null,
          companyName : '',
          jobTitle : '',
          fromDate : null,
          toDate : null,
          jobDescri : ''
        }
      }
      else
        this.orgService.employee.workexp.splice(index, 1);
    }

    else if (type == "EDU") {
      if(this.orgService.employee.education.length == 1) {
        this.orgService.employee.education[index] = {
          id : null,
          schoolName : '',
          degree : '',
          fieldofStudy : '',
          doc : null,
          additionalNotes : '',
          intersts : ''
        }
      }
      else
      this.orgService.employee.education.splice(index, 1);
    }

    else if(type == "DEPEN") {
      if(this.orgService.employee.dependent.length == 1) {
        this.orgService.employee.dependent[index] = {
          id : null,
          name : '',
          relationship : '',
          dob : null
        }
      }
      else
      this.orgService.employee.dependent.splice(index, 1);
    }
  }
}
