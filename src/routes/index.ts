import { Router } from "express";
import { CreateProductController } from "../controllers/Product/Create";
import { CreateUserController } from '../controllers/User/Create';

const router = Router();

const createProduct = new CreateProductController();
const createUser = new CreateUserController();

router.post("/product", createProduct.handle)
router.post("/user", createUser.handle)

export {router}
