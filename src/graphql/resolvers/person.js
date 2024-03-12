import { person } from "../../database/controllers/person";

export default {
  person: person.getById,
  people: person.getAll,
};
