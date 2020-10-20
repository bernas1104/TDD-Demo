import { inject, injectable } from 'tsyringe';

import User from '../typeorm/entities/User';
import IHashProvider from '../interfaces/IHashProvider';
import IUsersRepository from '../interfaces/IUsersRepository';

interface IRequest {
  cpf: string;
  rg: string;
  email: string;
  password: string;
  password_confirmation: string;
}

@injectable()
class UserSignUpService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({
    cpf,
    rg,
    email,
    password,
    password_confirmation,
  }: IRequest): Promise<User> {
    return new User();
  }
}

export default UserSignUpService;
