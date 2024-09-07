const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(cors({
  origin: 'https://site-zeta-hazel.vercel.app/', // Replace with your Vercel frontend URL
}));
app.post('/api/wallet', (req, res) => {
  const { address } = req.body;
  if (address) {
    res.status(200).json({ message: 'Wallet connected', address });
  } else {
    res.status(400).json({ error: 'Address is required' });
  }
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
