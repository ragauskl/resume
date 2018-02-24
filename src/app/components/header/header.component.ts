import { Component, OnInit } from '@angular/core';
import * as data from '../../../data.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cv_data = (<any>data);

  constructor() { }

  ngOnInit() {
  }

}
