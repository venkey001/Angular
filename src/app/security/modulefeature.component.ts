import { ModuleMasterModel, FeatureModel } from './module-master-model';
import { SecurityService } from './security.service';
import { Component, OnInit, NgModule, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr';
import { error } from 'util';

@Component({
  templateUrl: 'modulefeature.component.html'
})
export class ModuleFeatureComponent implements OnInit{

  listModules : ModuleMasterModel[];
  constructor(public securityService : SecurityService, public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.resetForm();
    this.getModules();
  }

  resetForm(form? : NgForm) {
    if(form != null)
      form.reset();
    this.securityService.selectedModule = {
      id : null,
      moduleId : '',
      moduleName : '',
      active : '',
      comments : '',
      featureDOs : [{
        id : null,
        featureId : '',
        featureName : '',
        active : ''
      }]
    };
  }

  onSubmit(form : NgForm) {
    let module = this.securityService.selectedModule;
    let action = 'CREATE';
    if(module.id != undefined)
      action = 'EDIT';
    this.securityService.postModule(module)
    .subscribe(data => {
      if(action == 'CREATE')
        this.toastr.success("Module Successfully Created.");
      else
      this.toastr.success("Module Successfully Updated.");

      this.resetForm(form);
      this.getModules();
    },
    error => {
      console.error(error);
      this.toastr.error("Unable to create or update Module.");
    });
  }

  getModules() {
    this.securityService.getData()
      .subscribe(data => {
        this.listModules = data;
      },
    error => {
      console.error(error);
      this.toastr.error("Unable to fetch Modules.");
    });
  }

  getModuleById(id) {
    this.securityService.getDataById(id)
      .subscribe(data => {
        if(data.featureDOs.length == 0)
        {
          data.featureDOs = [{
            id : null,
            featureId : '',
            featureName : '',
            active : '',
          }]
        }
        this.securityService.selectedModule = data;
      },
      error => {
        console.error(error);
        this.toastr.error("Unable to fetch Modules.");
      });
  }

  deleteModule(id) {
    this.securityService.deleteModule(id)
    .subscribe(
      data => {
        this.toastr.success("Module Successfully Deleted.");
        this.getModules();
    },
    error => {
      this.toastr.error("Unable to delete. This record is refering somewhere else please check.");
    });
  }

  addRow() {
    let feature : FeatureModel;
    feature = {
        id : null,
        featureId : '',
        featureName : '',
        active : ''
      }
    this.securityService.selectedModule.featureDOs.push(feature);
  }

  removeRow(index) {
    if(this.securityService.selectedModule.featureDOs.length ==1)
    {
      this.securityService.selectedModule.featureDOs[index] = {
        id: null,
        featureId : '',
        featureName : '',
        active : ''
      }
    }
    else
      this.securityService.selectedModule.featureDOs.splice(index, 1);
  }
}
