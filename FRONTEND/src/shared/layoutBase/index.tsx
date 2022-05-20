import { Outlet } from "react-router-dom";
import Header from "../../components/header";


function LayoutBase () {
  return (
    <div>
      <Header />
      <Outlet/>
      <div>Body</div>
      <div>Footer</div>
    </div>
  )
}

export default LayoutBase;