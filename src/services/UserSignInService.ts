import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import AppError from '../errors/AppError';
import User from '../typeorm/entities/User';
import IHashProvider from '../interfaces/IHashProvider';
import IUsersRepository from '../interfaces/IUsersRepository';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

@injectable()
class UserSignInService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);
    if (!user) throw new AppError('Combinção Email/Senha inválida', 403);

    const correctPassword = await this.hashProvider.compareHash(
      password,
      user.password,
    );

    if (!correctPassword)
      throw new AppError('Combinção Email/Senha inválida', 403);

    return { user, token: '' };
  }
}

export default UserSignInService;
