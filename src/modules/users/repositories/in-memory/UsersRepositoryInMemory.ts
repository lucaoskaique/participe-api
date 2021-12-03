import { ICreateUserDTO } from "@modules/users/dtos/ICreateUserDTO";
import { User } from "@modules/users/entities/User";

import { IUsersRepository } from "../IUsersRepository";

class UsersRepositoryInMemory implements IUsersRepository {
  users: User[] = [];

  async create({
    first_name,
    last_name,
    email,
    password,
    fone,
    cpf_cnpj,
    city_id,
    admin,
    person_type,
  }: ICreateUserDTO): Promise<void> {
    const user = new User();

    Object.assign(user, {
      first_name,
      last_name,
      email,
      password,
      fone,
      cpf_cnpj,
      city_id,
      admin,
      person_type,
    });

    this.users.push(user);
  }

  async findById(id: number): Promise<User> {
    return this.users.find((user) => user.id === id);
  }
  async findByEmail(email: string): Promise<User> {
    return this.users.find((user) => user.email === email);
  }
}

export { UsersRepositoryInMemory };
