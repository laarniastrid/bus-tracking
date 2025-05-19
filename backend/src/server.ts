import Fastify from 'fastify';
import dotenv from 'dotenv';

dotenv.config();

const app = Fastify();

app.get('/', async () => {
  return {
    message: 'Welcome to the Bus Tracking API. Try /health to check status.',
  };
});

app.get('/health', async () => {
  return {
    status: 'ok',
  };
});

const start = async () => {
  try {
    const port = Number(process.env.PORT || 3000);

    await app.listen({ port, host: '0.0.0.0' });

    console.log(`🚀 Fastify listening on http://localhost:${port}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
