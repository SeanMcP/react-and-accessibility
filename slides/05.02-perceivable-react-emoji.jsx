import React from 'react'

function Emoji(props) {
    return <span>{props.symbol}</span>
}

// function Emoji({ label, symbol, ...props }) {
//     return (
//         <span
//             aria-label={label}
//             role="img"
//             {...props}
//         >
//             {symbol}
//         </span>
//     );
// };

// Plug: checkout `a11y-react-emoji` on npm

export default Emoji