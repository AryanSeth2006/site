// server/routes/wallet.js
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { address } = req.body;
  if (!address) {
    return res.status(400).json({ error: 'Address is required' });
  }

  // Here you would handle the wallet address (e.g., save to database)
  console.log(`Received wallet address: ${address}`);
  
  // Respond with success
  res.status(200).json({ message: 'Wallet address received successfully' });
});

module.exports = router;
