import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { EmployeeModel } from './employee-model';
import { Configuration } from '../common/app.constants';

@Injectable() 
export class OrgnizationService {
  
  private actionUrl: string;
  employee : EmployeeModel = new EmployeeModel();
  constructor(private http : Http, private configuration: Configuration) {
    this.actionUrl = configuration.ServerWithOrgUrl;
  }

  saveEmployee(employee : EmployeeModel)
  {
    var body = JSON.stringify(employee);
    var headerOpts = new Headers({'Content-type' : 'application/json'});
    var reqOpts = new RequestOptions({method : RequestMethod.Post, headers : headerOpts});
    return this.http.post(this.actionUrl+'saveEmployee', body, reqOpts).map(x => x.json);
  }

  getEmployees()
  {
    var headerOpts = new Headers({'Content-type' : 'application/json'});
    var reqOpts = new RequestOptions({method : RequestMethod.Get, headers : headerOpts});
    return this.http.get(this.actionUrl+"employees", reqOpts).
    map(this.extractData);
  }

  getEmployeeById(id: number)
  {
    var headerOpts = new Headers({'Content-type' : 'application/json'});
    var reqOpts = new RequestOptions({method : RequestMethod.Get, headers : headerOpts});
    return this.http.get(this.actionUrl+"employee/"+id, reqOpts).
    map(this.extractData);
  } 

  deleteEmployee(id : number)
  {
    var headerOpts = new Headers({'Content-type' : 'application/json'});
    var reqOpts = new RequestOptions({method : RequestMethod.Delete, headers : headerOpts});
    return this.http.get(this.actionUrl+"employee/"+id, reqOpts)
    .map(success => success.status);
  }

  private extractData(res: Response)
  {
    let body = res.json();
    return body;
  }
}
