import React from 'react'

const AppName = 'HyperCool.ai'

export default function Page({ children, title }) {
  React.useEffect(() => {
    document.title = title
      ? `${title} - ${AppName}`
      : AppName
  }, [title])

  return <div className="Page">{children}</div>
}
