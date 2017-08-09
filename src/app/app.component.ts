import { Component } from '@angular/core';
import { MdDialog } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public dialog: MdDialog) {}

  openDialog() {
    this.dialog.open(DialogOverviewExampleDialog);
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  template: '<p>Hi, I\'m a dialog!</p>',
})
export class DialogOverviewExampleDialog {}
