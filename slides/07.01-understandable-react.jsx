import React from 'react'

function Input(props) {
    return (
        <input className="Input" placeholder={props.placeholder} type={props.type} value={props.value} />
    )
}

// function Input({ label, error, ...props }) {
//     const id = `${props.name}-${String(Math.random()).slice(-5)}`
//     return (
//         <div className={`Input ${error ? 'Input--error' : ''}`}>
//             <label htmlFor={id}>{label}</label>
//             <input id={id} aria-invalid={Boolean(error)} {...props} />
//             {error && <p className="Input__error" role="alert">{error}</p>}
//         </div>
//     )
// }

export default Input