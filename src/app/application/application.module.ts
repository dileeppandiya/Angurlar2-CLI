import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationComponent } from './application.component';
import { ApplicationService } from './application.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [ApplicationService],
  declarations: [ApplicationComponent]
})
export class ApplicationModule { }
