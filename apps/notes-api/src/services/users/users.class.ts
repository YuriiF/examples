import crypto from 'crypto';
import { Params } from '@feathersjs/feathers';
import { Service, NedbServiceOptions } from 'feathers-nedb';
import { Application } from '../../declarations';

/** The Gravatar image service */
const gravatarUrl = 'https://s.gravatar.com/avatar';

/** The size query. Our chat needs 60px images */
const query = 's=60';

/** A type interface for our user (it does not validate any data) */
interface UserData {
  _id?: string;
  email: string;
  password: string;
  avatar?: string;
  // githubId?: string;
}

class Users extends Service<UserData> {
  constructor(options: Partial<NedbServiceOptions>, app: Application) {
    super(options);
  }

  create(data: UserData, params?: Params) {
    /** This is the information we want from the user signup data, skip githubId for now */
    const { email, password /* githubId */ } = data;

    /** Gravatar uses MD5 hashes from an email address (all lowercase) to get the image */
    const hash = crypto
      .createHash('md5')
      .update(email.toLowerCase())
      .digest('hex');

    /** The full avatar URL */
    const avatar = `${gravatarUrl}/${hash}?${query}`;

    /** The complete user, skip githubId for now */
    const userData = {
      email,
      password,
      // githubId,
      avatar,
    };

    /** Call the original `create` method with existing `params` and new data */
    return super.create(userData, params);
  }
}

export { Users };
