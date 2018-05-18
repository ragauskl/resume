import { Component, OnInit, HostListener } from '@angular/core';
import * as data from '../../data.json';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  cv_data = (<any>data);
  pdfView = false;
  confidential = false;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const view = params.get('view');
      this.pdfView = view === 'pdf';
    });
    this.route.queryParams.subscribe(params => {
      if (params.conf) {
        this.confidential = params.conf === '1';
      }
    });
  }
}
