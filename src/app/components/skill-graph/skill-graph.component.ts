import { Component, OnInit, Input, Output, ViewChild, HostListener } from '@angular/core';
import * as data from '../../../data.json';

@Component({
  selector: 'app-skill-graph',
  templateUrl: './skill-graph.component.html',
  styleUrls: ['./skill-graph.component.scss']
})
export class SkillGraphComponent implements OnInit {
  cv_data = (<any>data);
  @ViewChild('canvas') canvas;
  @Input() parentWidth: number;
  colWRatio = 3.5 / 100;
  grLight = '#ab58c4';
  grDark = '#783b8a';
  dark = '#373741';
  grey = '#e0e0e5';
  light = '#ffffff';

  grid = {
    x: 0,
    y: 0,
    w: 0,
    h: 0,
    colW: 0,
    colSpaceW: 0,
    spaceW: 0
  };

  constructor() { }

  @HostListener('window:resize')
  onWindowResize(): void {
    this.draw();
  }

  ngOnInit() {
    this.draw();
  }

  draw() {
    const canvas = this.canvas.nativeElement;
    const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
    this.grid.colW = this.parentWidth * this.colWRatio;
    this.grid.colSpaceW = Math.floor(this.grid.colW * 0.2);
    this.grid.w = this.calculateSkillsWidth();
    this.grid.h = this.calculateSkillsHeight();
    this.grid.spaceW = this.grid.h / 10;
    ctx.font = '7px Roboto';
    const sideTextSize = ctx.measureText('1234567890');

    this.grid.x = sideTextSize.width + this.grid.spaceW;
    this.grid.y = ctx.measureText('M').width * 2 + this.grid.spaceW;
    canvas.height = this.grid.y + this.grid.h + 1;
    canvas.width = this.grid.x + this.grid.w + 1;

    this.drawShadow(ctx);
    this.drawFrame(ctx);

  }

  drawFrame(ctx) {
    // BORDER
    ctx.strokeStyle = this.dark;
    ctx.beginPath();
    ctx.moveTo(this.grid.x, this.grid.y);
    ctx.lineTo(this.grid.x, this.grid.y + this.grid.h);
    ctx.lineTo(this.grid.x + this.grid.w, this.grid.y + this.grid.h);
    ctx.stroke();
  }

  drawShadow(ctx) {
    // HORIZONTAL SHADOW
    ctx.strokeStyle = this.grey;
    let shadowH = this.grid.y + this.grid.h - this.grid.spaceW;
    while (shadowH >= this.grid.y) {
      ctx.beginPath();
      ctx.moveTo(this.grid.x, shadowH);
      ctx.lineTo(this.grid.x + this.grid.w, shadowH);
      ctx.stroke();
      shadowH -= this.grid.spaceW;
    }
    // VERTICAL SHADOW
    let shadowW = this.grid.x;
    while (shadowW <= this.grid.x + this.grid.w) {
      ctx.beginPath();
      ctx.moveTo(shadowW, this.grid.y);
      ctx.lineTo(shadowW, this.grid.y + this.grid.h);
      ctx.stroke();
      shadowW += this.grid.spaceW;
    }
  }

  drawLevelText(ctx, canvas, minX, maxX, space) {

  }

  calculateSkillsWidth() {
    let width = 0;
    for (const cat of this.cv_data.skill_categories) {
      const keyCount = Object.keys(cat.skills).length;
      // intial distance from category start
      width += this.grid.colSpaceW;
      // distance for every skill in category and 5px space after it
      width += keyCount * this.grid.colW + keyCount * this.grid.colSpaceW;
    }
    return width;
  }

  calculateSkillsHeight() {
    return this.grid.colW / 0.20;
  }
}
