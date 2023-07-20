import React from "react";

export default function ERC20() {
  return (
    <div>
      <h1>INTRODUCTION</h1>
      <p>What is a Token? </p>
      <ul className="list-disc">
        <li>Tokens can represent virtually anything in Ethereum:</li>
        <li>reputation points in an online platform</li>
        <li>skills of a character in a game lottery tickets</li>
        <li>financial assets like a share in a company</li>
        <li>a fiat currency like USD</li>
        <li>an ounce of gold</li>
      </ul>
      <p>
        Such a powerful feature of Ethereum must be handled by a robust
        standard, right? That's exactly where the ERC-20 plays its role! This
        standard allows developers to build token applications that are
        interoperable with other products and services.
      </p>
      <h1>What is ERC-20?</h1>
      <p>
        The ERC-20 introduces a standard for Fungible Tokens, in other words,
        they have a property that makes each Token be exactly the same (in type
        and value) as another Token. For example, an ERC-20 Token acts just like
        the ETH, meaning that 1 Token is and will always be equal to all the
        other Tokens.
      </p>
    </div>
  );
}
