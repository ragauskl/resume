import { Component, OnInit, Input } from '@angular/core';
import data from '../../../data.json';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.scss']
})
export class MainPanelComponent implements OnInit {
  cv_data = (<any>data);
  @Input() pdfView = false;

  constructor() { }

  ngOnInit() {
  }

}
