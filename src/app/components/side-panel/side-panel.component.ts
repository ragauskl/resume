import { Component, OnInit } from '@angular/core';
import * as data from '../../../data.json';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent implements OnInit {
  cv_data = (<any>data);
  constructor() { }

  ngOnInit() {
  }

}
