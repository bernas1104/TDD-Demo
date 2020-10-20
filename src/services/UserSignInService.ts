import { inject, injectable } from 'tsyringe';

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
    return { user: new User(), token: '' };
  }
}

export default UserSignInService;
