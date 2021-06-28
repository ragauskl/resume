import { Component } from '@angular/core'

@Component({
  selector: 'app-profile-img',
  templateUrl: './profile-img.component.html',
  styleUrls: ['./profile-img.component.scss']
})
export class ProfileImgComponent {

  isEdge () {
    if (navigator.userAgent.indexOf('Edge') >= 0) {
      return true
    }
    return false
  }
}
