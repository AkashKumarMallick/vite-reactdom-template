import { ReactNode } from "react"
import { Outlet } from "react-router-dom"

interface prop {
    children?: ReactNode
}
const RootWrapper = ({children}: prop) => {
  return (
    <div>
        <Outlet/>
        {children ? children : null}
    </div>
  )
}

export default RootWrapper