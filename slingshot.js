class SLINGSHOT{
    constructor(bodyA,pointB){

        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffnesss:0.02,
            length:10
        }
        this.body=Constraint.create(options);
        this.pointB=pointB
        World.add(world,this.body);
    }

     fly(){
        this.body.bodyA=null
    }   
    show(){
        if(this.body.bodyA){
            var posA = this.body.bodyA.position;
            strokeWeight(5);
            line(posA.x,posA.y,this.pointB.x,this.pointB.y);

        }           
    }   
}