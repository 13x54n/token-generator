import { Button } from "@tremor/react";
import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between align-center p-3 px-5">
      <h1 className="text-lg font-bold">Token Generator by 13x54r</h1>
      <div className="flex align-center gap-3">
        <i className="ri-github-fill cursor-pointer text-3xl"></i>
        <Button>
          Connect Metamask
        </Button>
      </div>
    </nav>
  );
}
