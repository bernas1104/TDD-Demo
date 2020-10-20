import User from '../entities/User';
import IUsersRepository from '../../interfaces/IUsersRepository';
import ICreateUserDTO from '../../dtos/ICreateUserDTO';

export default class FakeUsersRepository implements IUsersRepository {
  users: User[] = [];

  public async save(user: User): Promise<User> {
    const idx = this.users.findIndex(x => x.id === user.id);

    user.updated_at = new Date();
    this.users[idx] = user;

    return user;
  }

  public async create(data: ICreateUserDTO): Promise<User> {
    const user = new User();
    Object.assign(user, {
      id: this.users.length + 1,
      ...data,
      created_at: new Date(),
      updated_at: new Date(),
    });

    return user;
  }

  public async findAll(): Promise<User[]> {
    return this.users;
  }
}
