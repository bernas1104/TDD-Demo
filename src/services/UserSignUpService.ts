import { inject, injectable } from 'tsyringe';

import AppError from '../errors/AppError';
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
    let user = await this.usersRepository.findByCpf(cpf);
    if (user) throw new AppError('CPF cadastrado');

    user = await this.usersRepository.findByRg(rg);
    if (user) throw new AppError('RG cadastrado');

    user = await this.usersRepository.findByEmail(email);
    if (user) throw new AppError('Email cadastrado');

    if (password !== password_confirmation)
      throw new AppError('Password e Password_confirmation devem ser iguais');

    const hashedPassword = await this.hashProvider.generate(password);

    user = await this.usersRepository.create({
      cpf,
      rg,
      email,
      password: hashedPassword,
    });

    return user;
  }
}

export default UserSignUpService;
