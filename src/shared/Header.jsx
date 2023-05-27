import React, { useState } from "react";

export function Header() {
  const [state, setState] = useState(false);
  return (
    <header>
      <h1>simple ssr app1</h1>
    </header>
  );
}
