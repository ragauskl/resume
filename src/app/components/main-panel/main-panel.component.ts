import { Component, OnInit } from '@angular/core';
import * as data from '../../../data.json';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.scss']
})
export class MainPanelComponent implements OnInit {
  cv_data = (<any>data);

  constructor() { }

  ngOnInit() {
  }

}
