import AppError from '../errors/AppError';
import 'reflect-metadata';

import FakeHashProvider from '../providers/HashProvider/FakeHashProvider';
import FakeUsersRepository from '../typeorm/repositories/FakeUsersRepository';
import UserSignInService from './UserSignInService';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let userSignInService: UserSignInService;

describe('UserSignIn', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();
    userSignInService = new UserSignInService(
      fakeUsersRepository,
      fakeHashProvider,
    );
  });

  it('should login with success', async () => {
    await fakeUsersRepository.create({
      cpf: '1234566789',
      email: 'fausto@test.com',
      password: '123456',
      rg: '312312',
    });

    const signResponse = await userSignInService.execute({
      email: 'fausto@test.com',
      password: '123456',
    });

    expect(signResponse.user.id).toBe(1);
  });

  it('should email not exists', async () => {
    await expect(
      userSignInService.execute({
        email: 'invalidemail@test.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should return error if wrong password', async () => {
    await fakeUsersRepository.create({
      cpf: '1234566789',
      email: 'fausto@test.com',
      password: '123456',
      rg: '312312',
    });

    await expect(
      userSignInService.execute({
        email: 'fausto@test.com',
        password: '1234568',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
