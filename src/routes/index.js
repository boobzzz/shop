import express from 'express';
import productRoutes from './product.routes.js';

const app = express()

app.use('/', productRoutes)

export default app;