import { product } from "../../database/controllers/product";

export default {
	product: product.getById,
	products: product.getAll,
};
