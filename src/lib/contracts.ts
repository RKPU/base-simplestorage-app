// SimpleStorage contract ABI
export const SIMPLE_STORAGE_ABI = [
  {
    inputs: [],
    name: "get",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "x",
        type: "uint256",
      },
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

// Example contract address on Base Sepolia (you'll need to deploy your own)
export const SIMPLE_STORAGE_ADDRESS =
  "0x0000000000000000000000000000000000000000" as const;
