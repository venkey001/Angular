import { LoginModel } from './login-model';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Configuration } from '../common/app.constants';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {

  login : LoginModel = new LoginModel();
  private actionUrl: string;
  constructor(private http : Http, private configuration: Configuration) {
    this.actionUrl = configuration.ServerWithApiUrl;
  }

  loginCheck(login : LoginModel) {
    var body = JSON.stringify(login);
    var headerOpts = new Headers({'Content-type' : 'application/json'});
    var reqOpts = new RequestOptions({method : RequestMethod.Post, headers : headerOpts});
    return this.http.post(this.actionUrl+'login', body, reqOpts).map(this.extractData);
  }

  private extractData(res: Response)
  {
    let body = res.json();
    return body;
  }
}
