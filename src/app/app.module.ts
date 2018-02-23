import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SkillGraphComponent } from './components/skill-graph/skill-graph.component';


@NgModule({
  declarations: [
    AppComponent,
    SkillGraphComponent
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
