class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");
    this.trajectory = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    var BirdPosition = [this.body.position.x,this.body.position.y];
    this.trajectory.push(BirdPosition);
    for (var i =0;i<this.trajectory.length;i++) {
       image(this.smoke,this.trajectory[i][0],this.trajectory[i][1]);

    }
  }
}
