import './colourize.css'
import { useState } from 'react';


const Colourize = () => {
    const [color, setColor] = useState('red');

    const getRandomColor = () => {
        return `#${Math. floor(Math. random() * 16777215). toString(16)}`;
    }

    const changeColor = () => {
        const randomColor = getRandomColor();
        console.log("color changed", randomColor);
        setColor(randomColor);
    }
    return(
        <div className="colorize">
            <h1>Colourize</h1>
            <div className="box" style={{backgroundColor: color}}>
            {color}
            </div>
            <button onClick={ changeColor }> Change Me</button>
        </div>
    )
}

export default Colourize;