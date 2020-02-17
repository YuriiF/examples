// Initializes the `notes` service on path `/notes`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Notes } from './notes.class';
import createModel from '../../models/notes.model';
import hooks from './notes.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'notes': Notes & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/notes', new Notes(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('notes');

  service.hooks(hooks);
}
