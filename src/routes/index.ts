import { Router } from 'express';
import {
  CreateAddressController,
  DeleteAddressController,
  GetAddressController,
  ListAddressController,
  UpdateAddressController,
} from '../controllers/Address';
import {
  CreateRestaurantController,
  DeleteRestaurantController,
  GetRestaurantController,
  ListRestaurantController,
  UpdateRestaurantController,
} from '../controllers/Restaurant';
import {
  CreateRestaurantCategoryController,
  DeleteRestaurantCategoryController,
  GetRestaurantCategoryController,
  ListRestaurantCategoryController,
  UpdateRestaurantCategoryController,
} from '../controllers/RestaurantCategory';
import {
  CreateProductCategoryController,
  DeleteProductCategoryController,
  GetProductCategoryController,
  ListProductCategoryController,
  UpdateProductCategoryController,
} from '../controllers/ProductCategory';
import {
  CreateProductController,
  DeleteProductController,
  GetProductController,
  ListProductController,
  UpdateProductController,
} from '../controllers/Product';
import {
  CreateUserController,
  DeleteUserController,
  GetUserController,
  ListUserController,
  UpdateUserController,
} from '../controllers/User';
import {
  CreateStatusOrderController,
  DeleteStatusOrderController,
  GetStatusOrderController,
  ListStatusOrderController,
  UpdateStatusOrderController,
} from '../controllers/StatusOrder';

import {
  CreateOrderController,
  DeleteOrderController,
  GetOrderController,
  ListOrderController,
  UpdateOrderController,
} from '../controllers/Order';

import {
  CreateFavoriteRestaurantController,
  DeleteFavoriteRestaurantController,
  GetFavoriteRestaurantController,
  ListFavoriteRestaurantController,
  UpdateFavoriteRestaurantController,
} from '../controllers/FavoriteRestaurant';

import {
  CreateFavoriteProductController,
  DeleteFavoriteProductController,
  GetFavoriteProductController,
  ListFavoriteProductController,
  UpdateFavoriteProductController,
} from '../controllers/FavoriteProduct';

const router = Router();

// User
router.post('/user', CreateUserController.handle);
router.put('/user/', UpdateUserController.handle);
router.delete('/user/:id', DeleteUserController.handle);
router.get('/user/:email', GetUserController.handle);
router.get('/user/', ListUserController.handle);

// Restaurant
router.post('/restaurant/', CreateRestaurantController.handle);
router.put('/restaurant', UpdateRestaurantController.handle);
router.delete('/restaurant/:id', DeleteRestaurantController.handle);
router.get('/restaurant/:id', GetRestaurantController.handle);
router.get('/restaurant', ListRestaurantController.handle);

// Restaurant Category
router.post('/restaurant-category', CreateRestaurantCategoryController.handle);
router.put('/restaurant-category', UpdateRestaurantCategoryController.handle);
router.delete('/restaurant-category/:id', DeleteRestaurantCategoryController.handle);
router.get('/restaurant-category/:id', GetRestaurantCategoryController.handle);
router.get('/restaurant-category', ListRestaurantCategoryController.handle);

// Favorite Restaurant
router.post('/favorite-restaurant', CreateFavoriteRestaurantController.handle);
router.put('/favorite-restaurant/', UpdateFavoriteRestaurantController.handle);
router.delete('/favorite-restaurant/:id', DeleteFavoriteRestaurantController.handle);
router.get('/favorite-restaurant/:id', GetFavoriteRestaurantController.handle);
router.get('/favorite-restaurant/', ListFavoriteRestaurantController.handle);

// Product Category
router.post('/product-category', CreateProductCategoryController.handle);
router.put('/product-category', UpdateProductCategoryController.handle);
router.delete('/product-category/:id', DeleteProductCategoryController.handle);
router.get('/product-category/:id', GetProductCategoryController.handle);
router.get('/product-category', ListProductCategoryController.handle);

// Product
router.post('/product', CreateProductController.handle);
router.put('/product/', UpdateProductController.handle);
router.delete('/product/:id', DeleteProductController.handle);
router.get('/product/:id', GetProductController.handle);
router.get('/product/', ListProductController.handle);

// Favorite Product
router.post('/favorite-product', CreateFavoriteProductController.handle);
router.put('/favorite-product/', UpdateFavoriteProductController.handle);
router.delete('/favorite-product/:id', DeleteFavoriteProductController.handle);
router.get('/favorite-product/:id', GetFavoriteProductController.handle);
router.get('/favorite-product/', ListFavoriteProductController.handle);

// Address
router.post('/address', CreateAddressController.handle);
router.put('/address', UpdateAddressController.handle);
router.delete('/address/:id', DeleteAddressController.handle);
router.get('/address/:id', GetAddressController.handle);
router.get('/address', ListAddressController.handle);

// Status Order
router.post('/status-order', CreateStatusOrderController.handle);
router.put('/status-order/', UpdateStatusOrderController.handle);
router.delete('/status-order/:id', DeleteStatusOrderController.handle);
router.get('/status-order/:id', GetStatusOrderController.handle);
router.get('/status-order/', ListStatusOrderController.handle);

// Order
router.post('/order', CreateOrderController.handle);
router.put('/order/', UpdateOrderController.handle);
router.delete('/order/:id', DeleteOrderController.handle);
router.get('/order/:id', GetOrderController.handle);
router.get('/order/', ListOrderController.handle);

export { router };
