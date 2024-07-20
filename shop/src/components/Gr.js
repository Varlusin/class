import React from "react";

// function Greet(){
//     return <h1>Hello Vishwas</h1>
// }

const Gr = props => {
    console.log(props)
    return (
        <div>
            <h1>Hello {props.name} {props.category}</h1>
            { props.children }
        </div>
    )
}

export default Gr