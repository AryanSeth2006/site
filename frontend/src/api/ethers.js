import WalletConnectProvider from "@walletconnect/web3-provider";
import { ethers } from "ethers";

// Create a WalletConnect Provider
const provider = new WalletConnectProvider({
  infuraId: "6fdc127e07db4729bb7b947302472aaa", // Replace with your Infura project ID
});

// Connect to wallet
await provider.enable();

// Create an ethers provider from WalletConnect
const ethersProvider = new ethers.providers.Web3Provider(provider);

// Get signer and wallet address
const signer = ethersProvider.getSigner();
const address = await signer.getAddress();

console.log("Wallet connected:", address);
