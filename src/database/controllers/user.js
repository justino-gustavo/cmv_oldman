import { prisma } from "..";

export const user = new User();

class User {
	constructor() {}

	async getById({ id }) {
		const user = await prisma.user.findUnique({
			where: { id: Number(id) },
			include: { person: true },
		});

		const result = {
			id: user.id,
			createdAt: user.createdAt,
			updatedAt: user.updatedAt,
			name: user.person.name,
			email: user.person.email,
			phone: user.person.phone,
			role: user.role,
			place: user.place,
		};

		return result;
	}

	async getAll({ take = 15, skip = 0 }) {
		const users = await prisma.user.findMany({
			take,
			skip,
			include: { person: true },
		});

		const result = users.map((user) => ({
			id: user.id,
			createdAt: user.createdAt,
			updatedAt: user.updatedAt,
			name: user.person.name,
			email: user.person.email,
			phone: user.person.phone,
			role: user.role,
			place: user.place,
		}));

		return result;
	}
}
