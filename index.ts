import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors'; 
import { pool } from './repo/db_connector'

dotenv.config();

const createApp = (): Application => {
  const app: Application = express();

  //HERE THE PATHS ENABLED SHOULD BE MORE LIMITED
  app.use(cors({
    origin: '*',
  }));

  app.use(express.json());

  const userRoutes = require('./routes/user-routes/user-routes');
  const listRoutes = require('./routes/list-routes/list-routes');
  const itemRoutes = require('./routes/item-routes/item-routes');

  app.use('/api', userRoutes);
  app.use('/api', listRoutes);
  app.use('/api', itemRoutes);


  //Check DB connection
  app.get('/health', async (req: Request, res: Response) => {
    try {
      const result: any = await pool.query('SELECT NOW()'); // Test query
      res.json({
        message: 'Database connection successful!',
        time: result[0]?.now || 'No time returned',
      });
    } catch (error) {
      console.error('Error connecting to the database:', error);
      res.status(500).json({ error: 'Database connection failed' });
    }
  });

  app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to Express & TypeScript Server');
  });

  return app;
};

const startServer = (app: Application, port: string | number): any => {
  const server = app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });

  return server;
};

const closeServer = (server: any): Promise<void> => {
  return new Promise<void>((resolve) => {
    server.close(() => {
      console.log('Server closed');
      resolve();
    });
  });
};

export { createApp, startServer, closeServer };