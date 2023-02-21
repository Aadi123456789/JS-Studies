import react from 'react'
import Cube from './Cube'
import Cylinder from './Cylinder'
import './Circle.css'


class Circle extends react.Component{
    render(){
    var r = 25;
    var area = Math.PI*r*r;
    var circ = 2*Math.PI*r;
    return(
        <div id="a1"><center><h1><u>Circle</u></h1>
        <h2>Radius is {r}</h2>
        <h3>Area of Circle: {area}</h3>
        <h3>Circumference: {circ}</h3>
       <br></br></center>
            
           <Cube/>  <br></br>
                <Cylinder/>
             
                
            
        </div>

    )
    }
}
export default Circle;