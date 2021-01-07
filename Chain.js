class Chain{
    constructor(body1, Point2){
        var options ={
            bodyA:body1,
            pointB:Point2,
            length:20,
            stiffness:1
        }
        this.Chain = Constraint.create(options)
        World.add(world, this.Chain)
        this.bodyA = body1
        this.bodyB = Point2
    }
    fly(){
        this.bodyA = null
    }
    display(){

        if(this.bodyA){
        console.log("Hello")
        var pointA = this.bodyA.position
        var pointB = this.bodyB
        push();
        strokeWeight(9)
        line(pointA.x, pointA.y, pointB.x, pointB.y)
        pop();
        }
    }

}