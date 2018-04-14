import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public Server = 'http://localhost:8080/';
    public ApiUrl = 'api/';
    public OrgUrl = 'org/';
    public timeUrl = 'time/'
    public ServerWithApiUrl = this.Server + this.ApiUrl;
    public ServerWithOrgUrl = this.Server + this.OrgUrl;
    public ServerWithTimeUrl = this.Server + this.timeUrl;
}