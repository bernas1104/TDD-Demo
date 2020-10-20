import { inject, injectable } from 'tsyringe';

import User from '../typeorm/entities/User';
import IUsersRepository from '../interfaces/IUsersRepository';

@injectable()
class SearchUserByIdService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute(): Promise<User[]> {
    return [];
  }
}

export default SearchUserByIdService;
