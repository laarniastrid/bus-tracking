import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 3000);

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Bus Tracking API. Try /health to check status.',
  });
});

app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
  });
});

app.listen(port, () => {
  console.log(`Express server listeningon  http://localhost:${port}`);
});
