class Rubber{
constructor(x,y,r){
var options={
 friction:5,
 restitution:0.3,
 density:1

}
this.body=Bodies.circle(x,y,r,options)
this.r=r*2
World.add(world,this.body)

}
display(){
push()
translate(this.body.position.x,this.body.position.y)
fill("green")
ellipse(0,0,this.r,this.r)
pop()
}
}