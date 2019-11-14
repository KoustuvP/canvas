import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { timeout } from 'rxjs/operators';
import { RequestNode } from './request-node'

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {

  @ViewChild('canvas', { static: true }) 
  canvas: ElementRef<HTMLCanvasElement>;

  private ctx: CanvasRenderingContext2D;
  private node: RequestNode;

  constructor() { 
  
  }

  ngOnInit() {
    this.node=new RequestNode(1,20,75);
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.drawStructure();
    this.drawNode(this.node);
  }

  drawStructure():void{
    this.ctx.beginPath();
    this.ctx.fillRect(10,50,300,3);
    this.ctx.fillRect(10,100,300,3);
    this.ctx.fillRect(310,25,100,100);
    this.ctx.fillRect(410,50,300,3);
    this.ctx.fillRect(410,100,300,3);
    this.ctx.arc(750, 75, 50, 0, 2 * Math.PI);
    this.ctx.stroke();
    this.ctx.closePath();
  }
  drawNode(node:RequestNode){
    this.ctx.beginPath();
    this.ctx.arc(node.xCord, node.yCord, 10, 0, 2 * Math.PI);
    this.ctx.stroke();
    this.ctx.closePath();
  }


 

}