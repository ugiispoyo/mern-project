import express from 'express';
import cors from 'cors';
import productRoutes from '@/routes/product';
import errorMiddleware from '@/middlewares/error';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/products', productRoutes);

app.use(errorMiddleware);

export default app;
