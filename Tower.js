class Tower {
    constructor(x, y, width, height) {
      var options = {
        isStatic: true
      };
     
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      World.add(world, this.body);
      this.image = loadImage("tower.png")
    }
    display() {
      var pos = this.body.position;
     
      push();
     // rectMode(CENTER)
     // rect(pos.x,pos.y,this.width,this.height)
     imageMode(CENTER)
     image(this.image,pos.x,pos.y,this.width,this.height)
      pop();
    }
  }
  