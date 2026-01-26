import Product, { ProductDocument } from '@/models/product';

export const createProduct = async (
  payload: Partial<ProductDocument>
): Promise<ProductDocument> => {
  return await Product.create(payload);
};

export const getProducts = async (): Promise<ProductDocument[]> => {
  return await Product.find();
};

export const getProductById = async (
  id: string
): Promise<ProductDocument | null> => {
  return await Product.findById(id);
};

export const updateProduct = async (
  id: string,
  payload: Partial<ProductDocument>
): Promise<ProductDocument | null> => {
  return await Product.findByIdAndUpdate(id, payload, { new: true });
};

export const deleteProduct = async (
  id: string
): Promise<ProductDocument | null> => {
  return await Product.findByIdAndDelete(id);
};
