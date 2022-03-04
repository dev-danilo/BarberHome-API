import AppError from '@shared/errors/AppError';
import path from 'path';

import User from '@modules/users/infra/typeorm/entities/User';
import { getRepository } from 'typeorm';
import uploadConfig from '@config/upload';

interface IRequest {
  user_id: string;
  avatarFilename: string;
}

class UpdateUserAvatarService {
  public async execute({ user_id, avatarFilename }: IRequest): Promise<User> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne(user_id);

    if (!user) {
      throw new AppError('Only authenticated users can change avatar', 401);
    }

    if (user.avatar) {
      // Deletar avatar anterior
      const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar);
      console.log(userAvatarFilePath);
      // const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);

      // if (userAvatarFileExists) {
      //   console.log(userAvatarFileExists);
      //   await fs.promises.unlink(userAvatarFilePath);
      // }
    }
    console.log([user_id, avatarFilename]);

    user.avatar = avatarFilename;

    await usersRepository.save(user);

    return user;
  }
}

export default UpdateUserAvatarService;
