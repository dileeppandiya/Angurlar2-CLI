import { Component, OnInit } from '@angular/core';

import { Application } from './application';
import { ApplicationService } from './application.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  applications: Application[] = [];
  constructor(private applicationservice: ApplicationService) { }

  ngOnInit(): void {
    console.log('OnInit started');
    this.applicationservice.getApplications()
        .then(applications => this.applications = applications);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
