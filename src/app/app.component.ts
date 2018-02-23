import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import * as data from '../data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cv_data = (<any>data);
  @ViewChild('mainPanel') mainPanel: ElementRef;
  @ViewChild('myCanvas') canvasRef: ElementRef;

  ngOnInit() {
  }


  getParentWidth() {
    return this.mainPanel.nativeElement.offsetWidth;
  }
}
