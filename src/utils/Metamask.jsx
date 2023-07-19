import MetaMaskOnboarding from "@metamask/onboarding";
import React from "react";

export function OnboardingButton({ setIsWalletConnected }) {
  const [accounts, setAccounts] = React.useState([]);
  const onboarding = React.useRef();

  React.useEffect(() => {
    if (!onboarding.current) {
      onboarding.current = new MetaMaskOnboarding();
    }
  }, []);

  React.useEffect(() => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      if (accounts.length > 0) {
        onboarding.current.stopOnboarding();
      }
    }
  }, [accounts]);

  const onClick = () => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((newAccounts) => {
          setAccounts(newAccounts);
          setIsWalletConnected(true);
        });
    } else {
      onboarding.current.startOnboarding();
    }
  };
  return (
    <button onClick={() => onClick()}>
      {accounts.length > 0 ? accounts[0] : "Connect Wallet"}
    </button>
  );
}
