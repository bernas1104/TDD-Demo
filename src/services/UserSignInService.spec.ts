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

  it('should ...', async () => {
    // TODO
  });
});
