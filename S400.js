class S400 {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.image = loadImage("images/s-400.png");
     // this.s400.scale= 1;
      this.s400 = Bodies.rectangle(x,y,300,200,options);
      World.add(world, this.s400);
     
    }
    display(){
        var pos = this.s400.position;
        imageMode(CENTER);
    
        image(this.image,pos.x,pos.y,300,200);
    }

  };