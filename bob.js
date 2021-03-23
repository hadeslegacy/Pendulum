class bob{
  constructor(x,y,side){
      var options={
          isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      this.x=x
      this.y=y
      this.w=side
      this.h=side
      this.body = Bodies.rectangle(this.x,this.y,this.h,this.w,options)
      //this.image=loadImage("paper.png")
      World.add(world,this.body)
      


  }
  display(){
    push()
    var pos=this.body.position
        //translate(pos.x, pos.y);
        //rotate(angle);
        rectMode(CENTER);
        //fill('white')
        rect(pos.x, pos.y, this.w, this.h);
        pop()
  }
}