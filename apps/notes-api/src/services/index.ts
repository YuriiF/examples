import { Application } from '../declarations';
import users from './users/users.service';
import notes from './notes/notes.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function(app: Application) {
  app.configure(users);
  app.configure(notes);
}
