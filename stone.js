class Stone{
constructor(x,y,w,h){
var options={
restitution:0.8,
friction:0.9,
density:12

}
this.body=Bodies.rectangle(x,y,w,h,options)
this.width=w
this.height=h
World.add(world,this.body)

}
display(){
 
push()
translate(this.body.position.x,this.body.position.y)
rotate(this.body.angle)
fill("red")
rectMode(CENTER)
rect(0,0,this.width,this.height)
pop()
}

}