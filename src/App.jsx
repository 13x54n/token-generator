import React from "react";
import Navbar from "./components/Navbar";
import { Button } from "@tremor/react";
import Tokens from "./mocks/Tokens.json";

import ERC20 from "./components/ERC20";
import ERC721 from "./components/ERC721";
import ERC777 from "./components/ERC777";
import ERC1155 from "./components/ERC1155";
import ERC4626 from "./components/ERC4626";
import ERC20Form from "./components/Forms/ERC20";
import ERC721Form from "./components/Forms/ERC721";
import ERC777Form from "./components/Forms/ERC777";
import ERC1155Form from "./components/Forms/ERC1155";
import ERC4626Form from "./components/Forms/ERC4626";

export default function App() {
  const [activePage, setActivePage] = React.useState("ERC20");

  return (
    <div>
      <Navbar />
      <main className="flex items-start gap-6 p-3 px-5">
        <div className="w-64">
          <h1 className="mb-3">Token Types</h1>
          <div className="flex flex-col items-start">
            {Tokens.map((token, index) => {
              return (
                <Button className="w-64" key={index} onClick={() => setActivePage(token.name)}>
                  {token.name}
                </Button>
              );
            })}
          </div>
        </div>

        <div className="flex-1">
          {activePage === "ERC20" && <ERC20 />}
          {activePage === "ERC721" && <ERC721 />}
          {activePage === "ERC777" && <ERC777 />}
          {activePage === "ERC1155" && <ERC1155 />}
          {activePage === "ERC4626" && <ERC4626 />}
        </div>

        <div className="w-64">
          {activePage === "ERC20" && <ERC20Form />}
          {activePage === "ERC721" && <ERC721Form />}
          {activePage === "ERC777" && <ERC777Form />}
          {activePage === "ERC1155" && <ERC1155Form />}
          {activePage === "ERC4626" && <ERC4626Form />}
        </div>
      </main>
    </div>
  );
}
