class Mango{

constructor(x,y,r){

var options ={

isStatic: true,
restitution: 1,
friction: 1
}

this.x = x;
this.y = y;
this.r = r;

this.body = Bodies.circle(this.x, this.y, this.r, options);

this.image = loadImage("Plucking+mangoes/mango.png");

World.add(world, this.body);


}

display(){

    imageMode(CENTER);

    push();

    translate(this.body.position.x,this.body.position.y);

    fill("yellow");

    image(this.image, 0, 0, this.r, this.r);

    pop();
}

}



