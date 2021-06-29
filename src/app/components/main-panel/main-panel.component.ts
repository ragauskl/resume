import { Component, Input } from '@angular/core'
import content from '../../utils/content'

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.scss']
})
export class MainPanelComponent {
  cvData = content
  @Input() pdfView = false
}
