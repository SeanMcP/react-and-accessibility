import React from 'react'

export default function Image(props) {
  return <img className="Image" src={props.src} />
}
















// export default function Image(props) {
//     // You can handle this with TS or PropTypes
//     if (typeof props.alt === 'undefined') {
//         throw new Error('Alt tag is required for:', props.src)
//     }
//     return (
//         <img className="Image" src={props.src} alt={props.alt} />
//     )
// }
