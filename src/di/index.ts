import { container } from 'tsyringe';

import '../providers';

import IUsersRepository from '../interfaces/IUsersRepository';
import UsersRepository from '../typeorm/repositories/UsersRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
