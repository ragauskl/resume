import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { environment } from '../../environments/environment'

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

  ngAfterViewInit () {
    if (environment.production && !this.pdfView) {
      // Inject google tag manager
      const script = document.getElementById('google-analytics')
      script.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-116679248-1');
      `

      document.head.appendChild(script)
    }
  }
}
