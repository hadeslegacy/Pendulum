class chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 100
        }
        
        
        this.pointB=pointB;
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
    }
    
    Fly(){
     this.sling.bodyA=null

    }
    display(){
        if(this.sling.bodyA){
            
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        


    }

    
}