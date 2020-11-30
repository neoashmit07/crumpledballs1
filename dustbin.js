class dustbin{
    

    constructor(x,y,width,height){
    var options= {
       isStatic:true
    }
     
     this.body = Bodies.rectangle(x,y,width,height,options);
     this.width = width;
     this.height = height;
     World.add(world, this.body);
     //Matter.Bodies.circle(Matter.Bodies.circle(x, y, radius,options))
    }

     display(){
      rectMode(CENTER);
      fill("red");
      var pos=this.body.position;
     // console.log(pos.x,pos.y,this.width,this.height);
      rect(pos.x,pos.y,this.width,this.height);
     }




     
};