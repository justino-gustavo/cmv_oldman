import { prisma } from "../../database";

export default {
	product: ({ id }) => prisma.product.findUnique({ where: { id: Number(id) } }),
	products: async ({ take = 15, skip = 0 }) =>
		await prisma.product.findMany({
			take,
			skip,
			include: { use: true, usedIn: true },
		}),
};
