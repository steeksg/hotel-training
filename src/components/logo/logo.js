import React from "react";

import Logo from "./Logo.svg";

export default function LogoApp() {
  return (
    <img
      alt="Logo"
      src={Logo}
      max-width="40"
      max-height="40"
      className="d-inline-block align-top"
    />
  );
}
