import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { ModuleMasterModel } from './module-master-model'
import { Configuration } from '../common/app.constants';

@Injectable()
export class SecurityService {
  selectedModule: ModuleMasterModel = new ModuleMasterModel();
  moduleList : ModuleMasterModel[];
  private actionUrl: string;

  constructor(private http : Http, private configuration: Configuration) {
    this.actionUrl = configuration.ServerWithApiUrl;
  }

  postModule( module : ModuleMasterModel)
  {
    var body = JSON.stringify(module);
    var headerOpts = new Headers({'Content-type' : 'application/json'});
    var reqOpts = new RequestOptions({method : RequestMethod.Post, headers : headerOpts});
    return this.http.post(this.actionUrl+'saveModule', body, reqOpts).map(x => x.json);
  }
  getData()
  {
    var headerOpts = new Headers({'Content-type' : 'application/json'});
    var reqOpts = new RequestOptions({method : RequestMethod.Get, headers : headerOpts});
    return this.http.get(this.actionUrl+"module", reqOpts).
    map(this.extractData);
  }

  getDataById(id: number)
  {
    var headerOpts = new Headers({'Content-type' : 'application/json'});
    var reqOpts = new RequestOptions({method : RequestMethod.Get, headers : headerOpts});
    return this.http.get(this.actionUrl+"module/"+id, reqOpts).
    map(this.extractData);
  } 

  deleteModule(id : number)
  {
    var headerOpts = new Headers({'Content-type' : 'application/json'});
    var reqOpts = new RequestOptions({method : RequestMethod.Delete, headers : headerOpts});
    return this.http.get(this.actionUrl+"module/"+id, reqOpts)
    .map(success => success.status);
  }

  private extractData(res: Response)
  {
    let body = res.json();
    return body;
  }
}