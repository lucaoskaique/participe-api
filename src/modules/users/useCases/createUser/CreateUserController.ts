import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createCategoryUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Response {
    const {
      first_name,
      last_name,
      email,
      password,
      fone,
      cpf_cnpj,
      city_id,
      admin,
      person_type,
    } = request.body;
    this.createCategoryUseCase.execute({
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
    return response.status(201).send();
  }
}
