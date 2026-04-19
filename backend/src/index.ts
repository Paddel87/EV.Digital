import express, { type Request, type Response } from 'express';

const app = express();
const port = Number(process.env.PORT ?? 3000);

app.disable('x-powered-by');
app.use(express.json());

app.get('/healthz', (_req: Request, res: Response) => {
  res.status(200).json({ status: 'ok', service: 'ev-digital-backend' });
});

app.get('/', (_req: Request, res: Response) => {
  res.status(200).json({ message: 'EV.Digital Backend – Phase 0 Skeleton' });
});

const server = app.listen(port, () => {
  console.log(`[backend] listening on http://0.0.0.0:${port}`);
});

const shutdown = (signal: string): void => {
  console.log(`[backend] received ${signal}, shutting down`);
  server.close(() => process.exit(0));
};

process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));
