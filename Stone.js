class Stone{

constructor(x, y, r){

var options = {

isStatic: false,
restitution: 0.6,
friction: 1,
density: 1.2

}

this.x = x;
this.y = y;
this.r = r;

this.body = Bodies.circle(this.x, this.y, this.r, options);
World.add(world, this.body);


this.image = loadImage("Plucking+mangoes/stone.png");

}



display(){
   
   

    push();

    translate(this.body.position.x,this.body.position.y);

    fill("black");

    imageMode(CENTER);
    image(this.image, 0, 0, this.r, this.r);

    pop();
}

}