import 'reflect-metadata';

import FakeUsersRepository from '../typeorm/repositories/FakeUsersRepository';
import SearchUserByIdService from './SearchUserByIdService';

let fakeUsersRepository: FakeUsersRepository;
let searchUserByIdService: SearchUserByIdService;

describe('SearchUserById', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    searchUserByIdService = new SearchUserByIdService(fakeUsersRepository);
  });

  it('should ...', async () => {
    // TODO
  });
});
