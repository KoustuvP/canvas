
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RequestNode } from './request-node'

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {

  @ViewChild('canvas') 
  canvas: ElementRef<HTMLCanvasElement>;

  private ctx: CanvasRenderingContext2D;
  private node: RequestNode;
  private nodeList: RequestNode[]=[];
  private downStreamNodeList: RequestNode[]=[];
  id: NodeJS.Timer;

  constructor() { 
  
  }

  ngOnInit() {
    this.node=new RequestNode(1,20,75);
    this.createNodeList();
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.drawStructure();
     this.animate();
  }

  createNodeList(){
    let length:number=3
    for(let i=0;i<length;i++){
      this.nodeList.push(new RequestNode(i,(-(length+i))*30,75));
    } 
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
       this.ctx.clearRect(0,0,900,300);
       this.drawStructure();
       this.nodeList.forEach((node:RequestNode)=>{
        this.drawNode(node);
        node.xCord+=5;
       })
       this.downStreamNodeList.forEach((node:RequestNode)=>{
         this.drawNode(node);
         node.xCord+=5;
       });
       this.nodeList=this.nodeList.filter((node:RequestNode)=>{
         if(node.xCord>480){
          this.downStreamNodeList.push(node);
          console.log("a");
         }
           
         return node.xCord<400;
       })
       
       this.node.xCord+=5;
      //  if(this.node.xCord>=450)
      //  clearInterval(this.id);
      //console.log(this.node);
  }
  animate(){
    this.id=setInterval(this.animateArg.bind(this),100)
  }


 

}
