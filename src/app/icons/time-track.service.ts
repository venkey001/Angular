import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Configuration } from '../common/app.constants';
import { TaskModel, ProjectModel } from './TIme-modals';

@Injectable()
export class TimeTrackService {

  private actionUrl: string;
  task : TaskModel = new TaskModel();
  project : ProjectModel = new ProjectModel();
  constructor(private http : Http, private configuration: Configuration) {
    this.actionUrl = configuration.ServerWithTimeUrl;
  }
 
  saveTask(task : TaskModel)
  {
    var body = JSON.stringify(task);
    var headerOpts = new Headers({'Content-type' : 'application/json'});
    var reqOpts = new RequestOptions({method : RequestMethod.Post, headers : headerOpts});
    return this.http.post(this.actionUrl+'saveTask', body, reqOpts).map(x => x.json);
  }

  getTasks()
  {
    var headerOpts = new Headers({'Content-type' : 'application/json'});
    var reqOpts = new RequestOptions({method : RequestMethod.Get, headers : headerOpts});
    return this.http.get(this.actionUrl+"tasks", reqOpts).
    map(this.extractData);
  }

  getTaskById(id: number)
  {
    var headerOpts = new Headers({'Content-type' : 'application/json'});
    var reqOpts = new RequestOptions({method : RequestMethod.Get, headers : headerOpts});
    return this.http.get(this.actionUrl+"task/"+id, reqOpts).
    map(this.extractData);
  } 

  deleteTask(id : number)
  {
    var headerOpts = new Headers({'Content-type' : 'application/json'});
    var reqOpts = new RequestOptions({method : RequestMethod.Delete, headers : headerOpts});
    return this.http.get(this.actionUrl+"task/"+id, reqOpts)
    .map(success => success.status);
  }

  private extractData(res: Response)
  {
    let body = res.json();
    return body;
  }
}
