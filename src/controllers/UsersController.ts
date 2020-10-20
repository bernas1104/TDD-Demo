import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';

import UserSignUpService from 'services/UserSignUpService';
import UserSignInService from 'services/UserSignInService';
import SearchUserByIdService from 'services/SearchUserByIdService';

export default class UsersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const searchUserByIdService = container.resolve(SearchUserByIdService);

    const users = await searchUserByIdService.execute();

    return response.json(classToClass(users));
  }

  public async signup(request: Request, response: Response): Promise<Response> {
    const { cpf, rg, email, password, password_confirmation } = request.body;

    const userSignUpService = container.resolve(UserSignUpService);

    const user = await userSignUpService.execute({
      cpf,
      rg,
      email,
      password,
      password_confirmation,
    });

    return response.json(classToClass(user));
  }

  public async signin(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const userSignInService = container.resolve(UserSignInService);

    const userViewModel = await userSignInService.execute({ email, password });

    return response.json(userViewModel);
  }
}
