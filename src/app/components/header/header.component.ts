import { Component, Input } from '@angular/core'
import content from '../../utils/content'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  cvData = content
  @Input() pdfView = false
}
