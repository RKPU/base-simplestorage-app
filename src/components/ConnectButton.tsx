"use client";

import { useAccount, useConnect, useDisconnect } from "wagmi";
import styles from "./ConnectButton.module.css";

export function ConnectButton() {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  if (isConnected) {
    return (
      <div className={styles.connected}>
        <p className={styles.address}>
          Connected: {address?.slice(0, 6)}...{address?.slice(-4)}
        </p>
        <button onClick={() => disconnect()} className={styles.button}>
          Disconnect
        </button>
      </div>
    );
  }

  return (
    <div className={styles.connectContainer}>
      <h2>Connect Your Wallet</h2>
      <div className={styles.connectors}>
        {connectors.map((connector) => (
          <button
            key={connector.uid}
            onClick={() => connect({ connector })}
            className={styles.button}
          >
            Connect with {connector.name}
          </button>
        ))}
      </div>
    </div>
  );
}
