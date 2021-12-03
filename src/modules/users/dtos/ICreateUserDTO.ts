interface ICreateUserDTO {
  id?: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  fone: string;
  person_type: string;
  cpf_cnpj: string;
  city_id: number;
  admin: boolean;
}

export { ICreateUserDTO };
