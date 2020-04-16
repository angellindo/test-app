import React from "react";
import AppHeader from "./app-header";

function Layout(props) {
  return (
    <div className="w-full text-white">
      <AppHeader />
      {props.children}
    </div>
  );
}

export default Layout;
