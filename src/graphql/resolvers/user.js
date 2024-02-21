import { prisma } from "../../database";

export default {
	user: ({ id }) => prisma.user.findUnique({ where: { id: Number(id) } }),
	users: ({ take = 15, skip = 0 }) => prisma.user.findMany({ take, skip }),
};
