import { Outlet } from "react-router-dom"

const BaseWrapper = () => {
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default BaseWrapper