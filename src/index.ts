// src/index.ts
import express from 'express';
import userRoutes from './routes/userRoutes';

const app = express();

app.use(express.json());
app.use('/api', userRoutes);

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});