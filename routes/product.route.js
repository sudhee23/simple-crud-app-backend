import express from 'express';
import {
  createProduct, 
  deleteProductById, 
  getProductById, 
  getProducts,
  updateProductById}  
  from '../controllers/product.controller.js';

const router = express.Router();
router.get('/', getProducts);
router.post('/',createProduct);
router.get('/:id',getProductById);
router.put('/:id',updateProductById);
router.delete('/:id',deleteProductById);

export default router;
