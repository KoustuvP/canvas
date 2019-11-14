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
  private id:number;
  constructor() { 
  
  }

  ngOnInit() {
    this.node=new RequestNode(1,20,75);
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.drawStructure();
     this.drawNode(this.node);
     this.animate();
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
  animateArg(){
      // drawNode(this.node);
      // this.node.xCord+=10;
      // this.ctx.clearRect(0,0,900,300);
      // if(this.node.xCord>=450)
      // clearInterval(this.id);
      console.log(this.node,this.drawNode);
  }
  animate(){
    this.id=setInterval(this.animateArg,1000)
  }


 

}