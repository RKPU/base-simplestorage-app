"use client";

import { useState } from "react";
import { useReadContract, useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { SIMPLE_STORAGE_ABI, SIMPLE_STORAGE_ADDRESS } from "@/lib/contracts";
import styles from "./SimpleStorageContract.module.css";

export function SimpleStorageContract() {
  const [newValue, setNewValue] = useState("");

  // Read the current stored value
  const { data: storedValue, refetch } = useReadContract({
    address: SIMPLE_STORAGE_ADDRESS,
    abi: SIMPLE_STORAGE_ABI,
    functionName: "get",
  });

  // Write a new value
  const { data: hash, writeContract, isPending } = useWriteContract();

  // Wait for transaction confirmation
  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newValue) return;

    try {
      writeContract({
        address: SIMPLE_STORAGE_ADDRESS,
        abi: SIMPLE_STORAGE_ABI,
        functionName: "set",
        args: [BigInt(newValue)],
      });
    } catch (error) {
      console.error("Error setting value:", error);
    }
  };

  // Refetch when transaction is confirmed
  if (isConfirmed) {
    refetch();
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>SimpleStorage Contract</h2>

      <div className={styles.section}>
        <h3>Current Stored Value</h3>
        <p className={styles.value}>
          {storedValue !== undefined ? storedValue.toString() : "Loading..."}
        </p>
      </div>

      <div className={styles.section}>
        <h3>Store New Value</h3>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="number"
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
            placeholder="Enter a number"
            className={styles.input}
            disabled={isPending || isConfirming}
          />
          <button
            type="submit"
            disabled={isPending || isConfirming || !newValue}
            className={styles.button}
          >
            {isPending
              ? "Confirming..."
              : isConfirming
              ? "Processing..."
              : "Store Value"}
          </button>
        </form>

        {hash && (
          <div className={styles.status}>
            <p>Transaction Hash: {hash.slice(0, 10)}...{hash.slice(-8)}</p>
            {isConfirming && <p>Waiting for confirmation...</p>}
            {isConfirmed && <p className={styles.success}>Transaction confirmed!</p>}
          </div>
        )}
      </div>

      <div className={styles.info}>
        <p>
          <strong>Note:</strong> You need to deploy your own SimpleStorage contract
          and update the contract address in <code>src/lib/contracts.ts</code>
        </p>
      </div>
    </div>
  );
}
