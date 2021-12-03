import { ICreateUserDTO } from "@modules/users/dtos/ICreateUserDTO";
import { UsersRepository } from "@modules/users/repositories/implementations/UsersRepository";

class CreateUserUseCase {
  async execute({
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
    const usersRepository = new UsersRepository();
    const userAlreadyExists = await usersRepository.findByEmail(email);
  }
}

export { CreateUserUseCase };
