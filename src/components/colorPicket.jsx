import {useState} from "react";

const ColorPicker = ({ children, colorName }) =>{
    const [color, setColor] = useState('#ffffff');
    return (
        <div id="color-pick-container"
        style = {{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            width:"100%",
            height:"90vh",
            margin:"0",
            padding:"0",

        }}>
            
            <input type="color" value={color} onChange={(e)=> setColor(e.target.value)} />
            <h1 style={{color: color}}>Hello world</h1>
        </div>
    )
}

export default ColorPicker