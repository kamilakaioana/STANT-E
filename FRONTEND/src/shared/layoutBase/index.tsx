import { Outlet } from "react-router-dom";


function LayoutBase () {
  return (
    <div>
      <div>Header</div>
      <Outlet/>
      <div>Body</div>
      <div>Footer</div>
    </div>
  )
}

export default LayoutBase;