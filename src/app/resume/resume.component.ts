import { Component, OnInit } from '@angular/core';
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

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const view = params.get('view');
      this.pdfView = view === 'pdf';
    });
  }
}
