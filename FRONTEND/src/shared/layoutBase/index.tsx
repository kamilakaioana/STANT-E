import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/header";
import { colors } from "../../styles/colors";

function LayoutBase() {
  return (
    <div>
      <Header />
      <Outlet />
      <div
        style={{
          backgroundColor: colors.backgroundGreenLight,
          width: "100%",
          textAlign: "center",
          paddingTop: 4,
          paddingBottom: 4,
          position: "absolute",
        }}
      >
        <p style={{ color: "#000" }}>
          <b> KAMILA KAIOANA ALEIXO COSTA </b>- Mentoria React Js DB1 - Mentor:
          Diogo Souza
        </p>
      </div>
    </div>
  );
}

const MemoLayoutBase = React.memo(LayoutBase);
export default MemoLayoutBase;
