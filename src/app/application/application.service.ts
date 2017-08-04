import { Component, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Application } from './application';

import 'rxjs/add/operator/toPromise';
//  import 'rxjs/add/operator/do';
//  import 'rxjs/add/operator/catch';
//  import 'rxjs/add/operator/map';
//  import 'rxjs/add/observable/throw';

@Injectable()
export class ApplicationService {

private _apiUrl: string = "http://localhost:43780/";

  constructor(private http: Http) { }

  getApplication(id: number): Promise<Application> {
     const url = this._apiUrl + id
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Application)
            .catch(this.handleError);
      
   }

   getApplications(): Promise<Application[]> {
      const url = this._apiUrl + 'application'
      return this.http.get(url)
        .toPromise()
        .then((response: Response) => <Application[]>response.json())
        .catch(this.handleError);
   }

   private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
