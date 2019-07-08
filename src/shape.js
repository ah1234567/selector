import React from 'react';


const Shape = (props) => {
    console.log("Line 5 in shape.js, testing props", props.shape)

    return(
        <div className = {props.shape}/>

    )

    }

export default Shape;