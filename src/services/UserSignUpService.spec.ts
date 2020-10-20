import 'reflect-metadata';

import FakeHashProvider from '../providers/HashProvider/FakeHashProvider';
import FakeUsersRepository from '../typeorm/repositories/FakeUsersRepository';
import UserSignUpService from './UserSignUpService';

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

  it('should ...', async () => {
    // TODO
  });
});
