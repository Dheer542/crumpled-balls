class dustbin{
constructor( x,y,width,height){
var options={
    friction:0.5,
    isStatic:true,
    density:0.7
}
this.body = Bodies.rectangle(x, y, 50,50, options);

World.add(world, this.body);
}
display(){
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);
    fill("red");
    pop();
  }

}