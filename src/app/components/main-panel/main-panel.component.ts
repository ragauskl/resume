import { Component, Input } from '@angular/core'
import * as data from '../../../data.json'

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.scss']
})
export class MainPanelComponent {
  cvData = data['default']
  @Input() pdfView = false
}
