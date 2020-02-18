import React, { Component } from 'react';
import Login from '../Login/Login';
import Notes from '../Notes/Notes';
import client from '../../client/client';

export class App extends Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const notes = client.service('notes');
    const users = client.service('users');

    // @ts-ignore Try to authenticate with the JWT stored in localStorage
    client.authenticate().catch(() => this.setState({ login: null }));

    // On successfull login
    client.on('authenticated', (login) => {
      // Get all users and notes
      Promise.all([
        notes.find({
          query: {
            $sort: { createdAt: -1 },
            $limit: 25,
          },
        }),
        users.find(),
      ]).then(([notePage, userPage]) => {
        // We want the latest notes but in the reversed order
        const notes = notePage.data.reverse();
        const users = userPage.data;

        // Once both return, update the state
        this.setState({ login, notes, users });
      });
    });

    // On logout reset all all local state (which will then show the login screen)
    client.on('logout', () =>
      this.setState({
        login: null,
        notes: null,
        users: null,
      })
    );

    // Add new notes to the note list
    notes.on('created', (note) =>
      this.setState({
        notes: this.state.notes.concat(note),
      })
    );

    // Add new users to the user list
    users.on('created', (user) =>
      this.setState({
        users: this.state.users.concat(user),
      })
    );
  }

  render() {
    const { login, notes, users } = this.state;
    if (login === undefined) {
      return (
        <main className="container text-center">
          <h1>Loading...</h1>
        </main>
      );
    } else if (this.state.login) {
      return <Notes notes={notes} users={users} />;
    }

    return <Login />;
  }
}

export default App;
