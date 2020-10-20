import { getRepository, Repository } from 'typeorm';

import User from 'typeorm/entities/User';
import ICreateUserDTO from 'dtos/ICreateUserDTO';
import IUsersRepository from '../../interfaces/IUsersRepository';

export default class UsersRepository implements IUsersRepository {
  ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async create(data: ICreateUserDTO): Promise<User> {
    let user = new User();
    Object.assign(user, data);

    user = await this.save(user);

    return user;
  }

  public async save(user: User): Promise<User> {
    return this.ormRepository.save(user);
  }

  public async findAll(): Promise<User[]> {
    const users = await this.ormRepository.find();
    return users;
  }
}
