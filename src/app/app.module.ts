import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { ServiceWorkerModule, SwPush, SwUpdate } from '@angular/service-worker';
import { AppComponent, LogUpdateService } from './app.component';

import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    // SwPush,
    // SwUpdate,
    LogUpdateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
