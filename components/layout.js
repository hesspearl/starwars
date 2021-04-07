import React from "react";
import Nav from "./nav";

function Layout({ children }) {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
}

export default Layout;
