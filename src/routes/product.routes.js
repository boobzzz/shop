import * as PC from '../controllers/product.controller.js';
import router_pkg from 'express';

const { Router } = router_pkg
const router = Router()

router.post('/products', PC.createProduct)
router.get('/products', PC.readProducts)
router.get('/products/:id', PC.readProduct)
router.put('/products/:id', PC.updateProduct)
router.delete('/products/:id', PC.deleteProduct)

export default router;