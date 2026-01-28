import { Request, Response, NextFunction } from "express";
import * as productService from "@/services/product";
import { successResponse } from "@/utils/response";

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const product = await productService.createProduct(req.body);
    successResponse(res, product, "Product created");
  } catch (error) {
    next(error);
  }
};

export const findAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const result = await productService.getProductsPaginated(page, limit);
    successResponse(res, result);
  } catch (err) {
    next(err);
  }
};

export const findOne = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const product = await productService.getProductById(
      req.params.id as string
    );
    successResponse(res, product);
  } catch (error) {
    next(error);
  }
};

export const update = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const product = await productService.updateProduct(
      req.params.id as string,
      req.body
    );
    successResponse(res, product, "Product updated");
  } catch (error) {
    next(error);
  }
};

export const remove = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await productService.deleteProduct(req.params.id as string);
    successResponse(res, null, "Product deleted");
  } catch (error) {
    next(error);
  }
};
