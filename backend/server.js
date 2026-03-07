const express = require('express');
const cors = require('cors');

const app = express();

const PORT = 3000;

app.use(cors());

app.get('/user', (req, res) => {
  res.json({ userId: '12345' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});