import User from '../typeorm/entities/User';
import ICreateUserDTO from '../dtos/ICreateUserDTO';

export default interface IUsersRepository {
  save(user: User): Promise<User>;
  create(data: ICreateUserDTO): Promise<User>;
  findAll(): Promise<User[]>;
  findByCpf(cpf: string): Promise<User | undefined>;
  findByRg(rg: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
}
