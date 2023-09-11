import React, { FC } from 'react'
import {Provider} from "react-redux"
import doseStore from "./store";
interface ReduxProviderProps {
    children:React.ReactNode
}
export const ReduxProvider:FC<ReduxProviderProps> = ({children}) => {
  return (
    <Provider store={doseStore}>{children}</Provider>
  )
}
