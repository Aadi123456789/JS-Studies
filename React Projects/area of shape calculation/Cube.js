import react from 'react'
class Cube extends react.Component{
    render(){
        var a = 30;
        var area = 6*a*a;
        return(
            <div>
            <center><h1><u>Cube</u></h1>
            <h2>Side: {a}</h2>
            <h3>Area of cube : {area}</h3></center>
            </div>
        )
    }
}
export default Cube;