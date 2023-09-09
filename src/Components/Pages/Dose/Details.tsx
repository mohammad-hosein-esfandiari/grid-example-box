import React, { FC } from "react"

interface DetailsProps{
  children:React.ReactNode
}

export const Details:FC<DetailsProps> = ({children}) => {
  return (
    <div className="flex flex-col">
      {children}
    </div>
  )
}
