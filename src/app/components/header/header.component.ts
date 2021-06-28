import { Component, Input } from '@angular/core'
import data from '../../../data.json'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  cvData = data
  @Input() pdfView = false
}
