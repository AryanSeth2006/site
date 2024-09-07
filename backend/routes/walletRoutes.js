const express = require("express");
const router = express.Router();
const Wallet = require("../models/Wallet");

// POST /api/wallet/connect
router.post("/connect", async (req, res) => {
  const { walletAddress } = req.body;

  try {
    // Check if the wallet already exists in the database
    let wallet = await Wallet.findOne({ walletAddress });

    if (!wallet) {
      // Create a new wallet entry
      wallet = new Wallet({ walletAddress });
      await wallet.save();
    }

    return res.status(200).json({ message: "Wallet connected successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// GET /api/wallet/all (optional to list all wallets)
router.get("/all", async (req, res) => {
  try {
    const wallets = await Wallet.find();
    res.status(200).json(wallets);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve wallets" });
  }
});

module.exports = router;
