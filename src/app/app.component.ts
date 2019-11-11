import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'list';

  constructor(
     // private location: Location,
    public dialog: MatDialog) { }

  ngOnInit() { }

  returnButton() {
     // this.location.back();
  }

}
