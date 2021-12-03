import { connect } from "@database/index";
import { ICreateUserDTO } from "@modules/users/dtos/ICreateUserDTO";
import { User } from "@modules/users/entities/User";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";

class UsersRepository implements IUsersRepository {
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
    const conn = await connect();
    const queryString =
      "INSERT INTO `user` (`first_name`, `last_name`, `email`, `password`, `fone`, `cpf_cnpj`, `city_id`, `admin`, `person_type`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);";
    const values = [
      first_name,
      last_name,
      email,
      password,
      fone,
      cpf_cnpj,
      city_id,
      admin,
      person_type,
    ];
    await conn.query(queryString, values);
  }

  async findById(id: number): Promise<User> {
    const conn = await connect();

    const queryString = "SELECT * FROM contact_list where id = ?";
    const values = [id];
    const user = conn.query(queryString, values);

    return user[0];
  }

  async findByEmail(email: string): Promise<User> {
    const conn = await connect();
    const queryString = "SELECT * FROM contact_list where email=?";
    const user = conn.query(queryString, [email]);

    return user[0];
  }
}

export { UsersRepository };
