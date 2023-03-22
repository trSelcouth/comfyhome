function Star() {
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.z = random(width);
    this.pz = this.z;
    this.colour = random(100);
  
    this.update = function() {
      this.z = this.z - speed;
      if (this.z < 1) {
        this.z = width;
        this.x = random(-width, width);
        this.y = random(-height, height);
        this.pz = this.z;
      }
    };
  
    this.show = function() {
      noStroke();
  
      var sx = map(this.x / this.z, 0, 1, 0, width);
      var sy = map(this.y / this.z, 0, 1, 0, height);
  
      var r = map(this.z, 0, width, 16, 0);
      ellipse(sx, sy, r, r);
  
      var px = map(this.x / this.pz, 0, 1, 0, width);
      var py = map(this.y / this.pz, 0, 1, 0, height);
  
      this.pz = this.z / map(speed, 0, 50, 1, 0);
      strokeWeight(r);
    //   if(random(100) < random(map(speed, 0, 50, 0, 100)))
      stroke(map(speed, 0, 50, 50, 255), 255, 255);

    //   if(this.colour < 5) {
    //     stroke(102, 255, 255)
    // } else {
    //     stroke(255);
    // }
    //   stroke(255);
      line(px, py, sx, sy);
    };
  }