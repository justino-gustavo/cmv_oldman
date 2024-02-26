import { user } from "../../database/controllers/user";

export default {
	user: user.getById,
	users: user.getAll,
};
