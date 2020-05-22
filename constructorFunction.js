function Circle(radius){
    this.radius=radius;
    this.draw=function(){
        console.log('draw')
    }
}
const circle= Circle(1)