import { prisma } from "..";
import { user } from "./user";

export const product = new Product();

class Product {
  constructor() {}

  async getById({ id }) {
    return await prisma.product.findUnique({ where: { id: Number(id) } });
  }

  async getAll({ take, skip }) {
    const products = await prisma.product.findMany({
      take,
      skip,
      include: { use: true, usedIn: true },
    });

    const result = products.map((product) => {
      const author = user.getById({ id: product.userId });

      return {
        ...product,
        author,
      };
    });

    return result;
  }
}
