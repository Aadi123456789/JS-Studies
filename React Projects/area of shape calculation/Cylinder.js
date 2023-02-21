import react from 'react'
class Cylinder extends react.Component{
    render(){
        var radius =50;
        var height = 60;
        var area = (Math.PI*2*radius*height)+(2*radius*radius*Math.PI);
        return(
            <div><center>
                <h1><u>Cylinder</u></h1>
                <h3>radius : {radius}</h3>
                <h3>height : {height}</h3>
  <h3>Area : {area}</h3>
            </center>
            
        </div>
        )
    }
}
export default Cylinder;