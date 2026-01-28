import { Router } from "express";
import { validate } from "@/middlewares/validate";

import { createProductSchema } from "@/validators/product";

import * as productController from "@/controllers/product";

const router = Router();

router.post("/", validate(createProductSchema), productController.create);
router.get("/", productController.findAll);
router.get("/:id", productController.findOne);
router.put("/:id", productController.update);
router.delete("/:id", productController.remove);

export default router;
