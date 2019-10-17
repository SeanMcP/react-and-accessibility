import React from 'react'

export default function InputField(props) {
  return (
    <input
      className="Input"
      placeholder={props.placeholder}
      type={props.type}
      value={props.value}
    />
  )
}









// export default function InputField({ label, error, ...props }) {
//     const id = `${props.name}-${String(Math.random()).slice(-5)}`
//     return (
//         <div className={`Input ${error ? 'Input--error' : ''}`}>
//             <label htmlFor={id}>{label}</label>
//             <input id={id} aria-invalid={Boolean(error)} {...props} />
//             {error && <p className="Input__error" role="alert">{error}</p>}
//         </div>
//     )
// }
