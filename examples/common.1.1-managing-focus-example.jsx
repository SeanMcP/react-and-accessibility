import React from 'react'
import DropdownMenuItems from 'components/DropdownMenuItems'

// This is simplified for the sake of the presentation

export default function DropdownMenu(props) {
    const [isOpen, setIsOpen] = React.useState(false)
    const open = () => setIsOpen(true)
    const close = () => setIsOpen(false)

    return (
        <div className="DropdownMenu">
            <button onClick={open}>
                Menu
            </button>
            {isOpen && <DropdownMenuItems close={close} items={props.items} />}
            {isOpen && <div className="Overlay" onClick={close} />}
        </div>
    )
}

// export default function DropdownMenu(props) {
//   const buttonRef = React.createRef()
//   const [isOpen, setIsOpen] = React.useState(false)
//   const open = () => setIsOpen(true)
//   const close = () => {
//     setIsOpen(false)
//     buttonRef.current.focus()
//   }
//   return (
//     <div className="DropdownMenu">
//       <button onClick={open} ref={buttonRef}>
//         Menu
//       </button>
//       {isOpen && (
//         <DropdownMenuItems
//           close={close}
//           items={props.items}
//         />
//       )}
//       {isOpen && <div className="Overlay" onClick={close} />}
//     </div>
//   )
// }
