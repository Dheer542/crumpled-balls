class ground{
constructor(x,y,width,height){
var options={
    restitution:0.3,
    isStatic:true,
    friction:0.2,
    density:0.7
}
 this.body = Bodies.rectangle(x, y, 50,50, options);
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body);
}
      display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        fill("white");
      }

}