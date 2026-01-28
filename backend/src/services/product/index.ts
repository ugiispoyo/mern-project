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

export const getProductsPaginated = async (
  page = 1,
  limit = 10
) => {
  const skip = (page - 1) * limit;

  const [items, totalItems] = await Promise.all([
    Product.find().skip(skip).limit(limit).sort({ createdAt: -1 }),
    Product.countDocuments(),
  ]);

  return {
    items,
    meta: {
      page,
      limit,
      totalItems,
      totalPages: Math.ceil(totalItems / limit),
    },
  };
};