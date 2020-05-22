//factory function
function createCircle(radius){
    return{
        radius, //when key and value are same we can just remove the value, feature of es6
        draw: function(){
            console.log('draw');
        }
    }
}
const circle=createCircle(1);
circle.draw();


//let say we had a bug in the method, draw then we need to come back and put a fix for draw method. 
//the above way is object literal syntax
//if object has one or more method then it has behaviour and that could come up as a problem if we continue in object literal syntax
//if an object has one or more methods then this object has behaviour
//solution is using factory or constructor function