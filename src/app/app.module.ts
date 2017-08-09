import { WorkerAppModule } from '@angular/platform-webworker';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NoopAnimationsModule,
    WorkerAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
