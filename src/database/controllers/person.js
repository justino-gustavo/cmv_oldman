import { prisma } from "..";

export const person = new Person();

class Person {
  async getById({ id }) {
    return await prisma.person.findUnique({ where: { id: Number(id) } });
  }

  async getAll({ take, skip }) {
    return await prisma.person.findMany({ take, skip });
  }
}
