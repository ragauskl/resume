import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileImgComponent } from './components/profile-img/profile-img.component';
import { SidePanelComponent } from './components/side-panel/side-panel.component';
import { MainPanelComponent } from './components/main-panel/main-panel.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileImgComponent,
    SidePanelComponent,
    MainPanelComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
