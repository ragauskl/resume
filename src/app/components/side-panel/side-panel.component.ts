import { Component, Input } from '@angular/core'
import * as data from '../../../data.json'

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent {
  cvData = data['default']
  @Input() pdfView = false
  @Input() confidential = false
}
