import { container } from 'tsyringe';

import IHashProvider from '../interfaces/IHashProvider';
import BCryptHashProvider from './HashProvider/BCryptHashProvider';

container.registerSingleton<IHashProvider>('HashProvider', BCryptHashProvider);
