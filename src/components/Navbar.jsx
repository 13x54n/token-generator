import React from "react";
import { OnboardingButton } from "../utils/Metamask";

export default function Navbar() {
  const [isWalletConnected, setIsWalletConnected] = React.useState(false);

  return (
    <nav className="flex justify-between items-center p-3 px-5 border-b-2 border-[#e5e5e5]">
      <div className="flex gap-2 items-center">
        <img
          src="https://avatars.githubusercontent.com/u/135448616?v=4"
          className="w-10 object-contain"
          alt=""
          loading="lazy"
        />
        <p className="font-medium text-lg">Token Generator - 13x54r</p>
      </div>
      <div className="flex items-center gap-3">
        <i className="ri-github-fill cursor-pointer text-3xl"></i>
        <OnboardingButton setIsWalletConnected={setIsWalletConnected} />
      </div>
    </nav>
  );
}
