import * as authentication from '@feathersjs/authentication';
import processNotes from '../../hooks/process-notes';
import populateUser from '../../hooks/populate-user';
// Don't remove this comment. It's needed to format import lines nicely.

const { authenticate } = authentication.hooks;

export default {
  before: {
    all: [/*authenticate('jwt')*/],
    find: [],
    get: [],
    create: [processNotes()],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [/*populateUser()*/],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
