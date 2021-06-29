import { Component, Input } from '@angular/core'
import content from '../../utils/content'

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent {
  cvData = content
  @Input() pdfView = false
  @Input() confidential = false
}
