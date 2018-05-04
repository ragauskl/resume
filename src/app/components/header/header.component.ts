import { Component, OnInit, Input } from '@angular/core';
import * as data from '../../../data.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cv_data = (<any>data);
  @Input() pdfView = false;

  constructor() { }

  ngOnInit() { }

}
