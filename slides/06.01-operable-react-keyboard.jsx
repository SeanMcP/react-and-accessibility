import React from 'react'

function Button(props) {
    return (
        <div className={`Button Button--${props.type}`} onClick={props.onClick}>
            {props.children}
        </div>
    )
}

// function Button(props) {
//     return (
//         <button className="Button" type={props.type} onClick={props.onClick}>
//             {props.children}
//         </button>
//     )
// }

export default Button