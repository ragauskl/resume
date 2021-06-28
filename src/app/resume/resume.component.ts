import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  pdfView = false
  confidential = false

  constructor (private route: ActivatedRoute) {}

  ngOnInit () {
    this.route.queryParams.subscribe(params => {
      if (params.conf) {
        this.confidential = params.conf === '1'
      }
      if (params.view) {
        this.pdfView = params.view === 'pdf'
      }
    })
  }
}
