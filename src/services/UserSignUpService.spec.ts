import 'reflect-metadata';

import FakeHashProvider from '../providers/HashProvider/FakeHashProvider';
import FakeUsersRepository from '../typeorm/repositories/FakeUsersRepository';
import UserSignUpService from './UserSignUpService';
import AppError from '../errors/AppError';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let userSignUpService: UserSignUpService;

describe('UserSignUp', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();
    userSignUpService = new UserSignUpService(
      fakeUsersRepository,
      fakeHashProvider,
    );
  });

  it('should sign up the user', async () => {
    const response = await userSignUpService.execute({
      cpf: '654321',
      email: 'john@example.com',
      password: '123456',
      password_confirmation: '123456',
      rg: '654321',
    });

    expect(response.id).toBe(1);
  });

  it('should not sign up if cpf already exists', async () => {
    await fakeUsersRepository.create({
      cpf: '123456',
      email: 'john@example.com',
      password: '123456',
      rg: '123456',
    });

    await expect(
      userSignUpService.execute({
        cpf: '123456',
        email: 'jack@example.com',
        password: '123456',
        password_confirmation: '123456',
        rg: '654321',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not sign up if rg already exists', async () => {
    await fakeUsersRepository.create({
      cpf: '123456',
      email: 'john@example.com',
      password: '123456',
      rg: '123456',
    });

    await expect(
      userSignUpService.execute({
        cpf: '654321',
        email: 'jack@example.com',
        password: '123456',
        password_confirmation: '123456',
        rg: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not sign up if email already exists', async () => {
    await fakeUsersRepository.create({
      cpf: '123456',
      email: 'john@example.com',
      password: '123456',
      rg: '123456',
    });

    await expect(
      userSignUpService.execute({
        cpf: '654321',
        email: 'john@example.com',
        password: '123456',
        password_confirmation: '123456',
        rg: '654321',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not sign up if password does not match password_confirmation', async () => {
    await expect(
      userSignUpService.execute({
        cpf: '654321',
        email: 'john@example.com',
        password: '123456',
        password_confirmation: '654321',
        rg: '654321',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
