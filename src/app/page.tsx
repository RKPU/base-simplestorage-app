"use client";

import { useState } from "react";
import { useAccount } from "wagmi";
import { ConnectButton } from "@/components/ConnectButton";
import { SimpleStorageContract } from "@/components/SimpleStorageContract";
import styles from "./page.module.css";

export default function Home() {
  const { isConnected } = useAccount();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span className={styles.highlight}>SimpleStorage</span>
        </h1>
        <p className={styles.description}>
          A decentralized storage application on Base network
        </p>

        <div className={styles.card}>
          <ConnectButton />
        </div>

        {isConnected && (
          <div className={styles.contractSection}>
            <SimpleStorageContract />
          </div>
        )}
      </main>

      <footer className={styles.footer}>
        <p>Built with Next.js, Wagmi, and deployed on Vercel</p>
      </footer>
    </div>
  );
}
