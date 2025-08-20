import { Outlet } from "react-router";
import React from "react";

export default function Layout() {
  return (
    <div>
      <header style={{ padding: "10px", background: "#eee" }}>GENTHERM</header>

      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>
    </div>
  );
}
