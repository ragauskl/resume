import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'

import { MatButtonModule } from '@angular/material/button'

import { AppComponent } from './app.component'
import { HeaderComponent } from './components/header/header.component'
import { ProfileImgComponent } from './components/profile-img/profile-img.component'
import { SidePanelComponent } from './components/side-panel/side-panel.component'
import { MainPanelComponent } from './components/main-panel/main-panel.component'
import { ResumeComponent } from './resume/resume.component'

const appRoutes: Routes = [
  { path: '', component: ResumeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileImgComponent,
    SidePanelComponent,
    MainPanelComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
