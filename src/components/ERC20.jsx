import React from "react";
import { TextInput, Button } from "@tremor/react";

export default function ERC20() {
  return (
    <div>
      <TextInput className="mb-4" placeholder="Token Name" />

      <TextInput className="mb-4" placeholder="Token Symbol" />

      <TextInput className="mb-4" placeholder="Token Decimals" />

      <TextInput className="mb-4" placeholder="Token Supply" />

      <Button>Generate</Button>
    </div>
  );
}
