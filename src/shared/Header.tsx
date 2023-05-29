import React, { useEffect, useState } from "react";
import Component1 from "./Component1";

function Header() {
  return (
    <>
      <Component1 />
    </>
  );
}

export const App = () => <Header />;
