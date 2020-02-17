/**
 * Use this hook to manipulate incoming or outgoing data.
 * For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
 */
import { Hook, HookContext } from '@feathersjs/feathers';

export default (options = {}): Hook => {
  return async (context: HookContext) => {
    const { data } = context;

    /** Throw an error if we didn't get a text */
    if (!data.text) {
      throw new Error('A note must have a text');
    }

    /** The authenticated user */
    const user = context.params.user;

    /**
     * The actual note text.
     * Note can't be longer than 800 characters.
     */
    const text = data.text.substring(0, 800);

    /** Override the original data (so that people can't submit additional stuff) */
    context.data = {
      text,
      /** Set the user id */
      userId: user._id,
      /** Add the current date */
      createdAt: new Date().getTime(),
    };
    /** Best practice: hooks should always return the context instead just `undefined` */
    return context;
  };
};
