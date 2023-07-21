import React from "react";
import { Button, TextInput } from "@tremor/react";

export default function ERC20Form() {
  return (
    <form className="flex flex-col">
      <label htmlFor="">Initial Supply</label>
      <TextInput placeholder="1000000000"/>
      <label className="mt-3" htmlFor="">Token Name</label>
      <TextInput placeholder="13x54r"/>
      <label className="mt-3" htmlFor="">Token Symbol</label>
      <TextInput placeholder="LEX"/>
      <Button className="mt-3">Generate</Button>
    </form>
  );
}
