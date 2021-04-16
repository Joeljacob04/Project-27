class Bob {
    constructor(x, y, radius) {
      var options = {
          'isStatic':false,
          'restitution':1,
          'friction':0,
          'density':7.8
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      
      World.add(world, this.body);
    }
    display(){
      push();
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill("red");
      ellipse(pos.x, pos.y, this.radius);
      pop();
    }
  };