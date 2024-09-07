import React, { useState } from 'react';
import Web3 from 'web3';

const ConnectWalletButton = () => {
  const [account, setAccount] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleConnectWallet = async () => {
    if (window.ethereum) {
      try {
        // Create a Web3 instance
        const web3 = new Web3(window.ethereum);

        // Request account access
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

        // Get the connected account
        const userAccount = accounts[0];
        setAccount(userAccount);
        setErrorMessage(null);

        // Send wallet address to backend
        await fetch('http://localhost:5000/api/wallet', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ address: userAccount })
        });
      } catch (error) {
        console.error("Error connecting to wallet:", error);
        setErrorMessage(`An error occurred: ${error.message}`);
      }
    } else {
      console.error("No Ethereum provider found. Install MetaMask.");
      setErrorMessage("MetaMask is not installed. Please install MetaMask and try again.");
    }
  };

  return (
    <div className='flex flex-col pt-10 pl-4 h-auto'>
      <h2 className='text-lg'>Connect your wallet</h2>
      <button
        type="button"
        className="bg-[#685DD8] text-white px-4 py-2 rounded w-full"
        onClick={handleConnectWallet}
      >
        Connect Wallet
      </button>
      {account && <p className="mt-2 text-[#9F9CA4]">Connected Account: {account}</p>}
      {errorMessage && <p className="mt-2 text-red-600">{errorMessage}</p>}
    </div>
  );
};

export default ConnectWalletButton;
