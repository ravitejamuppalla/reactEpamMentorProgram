import React from "react";
import { Outlet } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CounterSection from "../components/CounterSection";

function RootLayout(props) {
  return (
    <>
      <CounterSection></CounterSection>
      <Outlet></Outlet>
    </>
  );
}

export default RootLayout;
