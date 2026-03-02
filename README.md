# SimpleStorage Base App

A decentralized application (dApp) built with Next.js that allows users to store and retrieve a single value on the Base blockchain network using a SimpleStorage smart contract.

## Features

- 🔗 **Wallet Connection**: Connect with MetaMask and other Web3 wallets using Wagmi
- 📝 **Smart Contract Interaction**: Store and retrieve values from a SimpleStorage contract
- 🌐 **Base Network Support**: Works on Base mainnet and Base Sepolia testnet
- 📊 **Vercel Web Analytics**: Built-in analytics tracking for visitor insights
- ⚡ **Next.js 14**: Built with the latest Next.js App Router
- 💎 **TypeScript**: Fully typed for better developer experience

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Blockchain**: Base (Ethereum L2)
- **Web3 Library**: Wagmi v2 + Viem
- **Language**: TypeScript
- **Styling**: CSS Modules
- **Analytics**: Vercel Web Analytics

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A Web3 wallet (e.g., MetaMask) configured for Base network
- (Optional) Some Base ETH for transaction fees

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/RKPU/base-simplestorage-app.git
   cd base-simplestorage-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. (Optional) Create a `.env.local` file:
   ```bash
   cp .env.example .env.local
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deploying Your Own Contract

The app includes a sample SimpleStorage contract in `contracts/SimpleStorage.sol`. To use your own contract:

1. Deploy the contract to Base or Base Sepolia using tools like:
   - [Remix IDE](https://remix.ethereum.org/)
   - [Hardhat](https://hardhat.org/)
   - [Foundry](https://getfoundry.sh/)

2. Update the contract address in `src/lib/contracts.ts`:
   ```typescript
   export const SIMPLE_STORAGE_ADDRESS = "0xYourContractAddressHere" as const;
   ```

3. If you modified the contract, update the ABI in the same file.

## Vercel Web Analytics

This project includes **Vercel Web Analytics** integration following the official setup guide:

### How It Works

The `Analytics` component from `@vercel/analytics/next` is integrated in the root layout (`src/app/layout.tsx`):

```tsx
import { Analytics } from "@vercel/analytics/next";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
```

### Enabling Analytics on Vercel

1. Deploy your app to Vercel (see deployment section below)
2. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
3. Select your project
4. Click the **Analytics** tab
5. Click **Enable** to activate Web Analytics

Once enabled, Vercel will automatically start tracking:
- Page views
- Unique visitors
- Top pages
- Referrers
- Device and browser information

### Privacy & Compliance

Vercel Web Analytics is privacy-friendly and GDPR-compliant:
- No cookies used
- Anonymous data collection
- No personal information tracked
- Learn more: [Vercel Analytics Privacy Policy](https://vercel.com/docs/analytics/privacy-policy)

## Deployment to Vercel

### Using Vercel CLI

1. Install Vercel CLI (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. Deploy to Vercel:
   ```bash
   vercel deploy
   ```

3. For production deployment:
   ```bash
   vercel --prod
   ```

### Using Git Integration (Recommended)

1. Push your code to GitHub, GitLab, or Bitbucket
2. Import your repository on [Vercel](https://vercel.com/new)
3. Vercel will automatically deploy on every push to your main branch

### After Deployment

- Analytics will automatically start tracking visitors
- Check the Network tab in your browser for requests to `/_vercel/insights/view`
- View your analytics data in the Vercel dashboard under the Analytics tab

## Project Structure

```
base-simplestorage-app/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with Analytics
│   │   ├── page.tsx             # Main page
│   │   ├── providers.tsx        # Wagmi & React Query providers
│   │   └── globals.css          # Global styles
│   ├── components/
│   │   ├── ConnectButton.tsx    # Wallet connection component
│   │   └── SimpleStorageContract.tsx  # Contract interaction UI
│   └── lib/
│       ├── wagmi.ts             # Wagmi configuration
│       └── contracts.ts         # Contract ABI and address
├── contracts/
│   └── SimpleStorage.sol        # Solidity smart contract
├── public/
│   └── vercel.svg              # Static assets
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Base Network Configuration

The app is configured to work with:

- **Base Mainnet**: For production use
- **Base Sepolia**: For testing

To add Base network to MetaMask:
- **Network Name**: Base
- **RPC URL**: https://mainnet.base.org
- **Chain ID**: 8453
- **Currency Symbol**: ETH
- **Block Explorer**: https://basescan.org

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Wagmi Documentation](https://wagmi.sh)
- [Base Network](https://base.org)
- [Vercel Analytics Documentation](https://vercel.com/docs/analytics)
- [Vercel Analytics Package](https://vercel.com/docs/analytics/package)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.
