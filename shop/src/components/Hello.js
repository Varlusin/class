import React from "react";

// const Hello = () => {
//     return (
//         <div className = 'dummyClass'>
//             <h2>Hello Vardan</h2>
//         </div>
//     )
// }

const Hello = () => {
    return React.createElement('div', 
        {id: 'hello', className: 'dummyClass'},
        React.createElement('h2', null,  'Hello Vardan'))
}


export default Hello