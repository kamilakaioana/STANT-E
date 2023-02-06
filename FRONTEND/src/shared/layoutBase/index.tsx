import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/header";
import { colors } from "../../styles/colors";

function LayoutBase() {
  return (
    <div style={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column'}}>
      <Header />
      <div style={{flex: 1}}>
        <Outlet  />
      </div>
      <div
        style={{
          backgroundColor: colors.backgroundGreenLight,
          textAlign: "center",
          paddingTop: 4,
          paddingBottom: 4,
          width: '100%',
        }}
      >
        <p style={{ color: "#000" }}>
          <b> © Copyright Kamila Kaioana Aleixo Costa 2022.</b>
        </p>
      </div>
    </div>
  );
}

const MemoLayoutBase = React.memo(LayoutBase);
export default MemoLayoutBase;
