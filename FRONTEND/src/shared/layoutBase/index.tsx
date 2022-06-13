import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/header";

function LayoutBase() {
  return (
    <div>
      <Header />
      <Outlet />
      <div>Footer</div>
    </div>
  );
}

const MemoLayoutBase = React.memo(LayoutBase);
export default MemoLayoutBase;
