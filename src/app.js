import express from "express";
import cors from 'cors';
import 'dotenv/config.js';

import productRoutes from './routes/product.routes.js';
import './db/connection.js';

const app = express()

// CORS middleware
app.use(cors())
// Request parser middleware
app.use(express.json())

app.use('/', productRoutes)

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Server has started on port ${PORT}...`))
