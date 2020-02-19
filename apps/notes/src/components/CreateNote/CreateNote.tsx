import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import pathOr from 'ramda/src/pathOr';

const CREATE_NOTE = gql`
  mutation createNote($text: String!) {
    createNote(input: { text: $text }) {
      text
    }
  }
`;

const GET_NOTES = gql`
  query getNotes {
    notes {
      _id
      text
    }
  }
`;

export const CreateNote = withRouter(({ history }) => {
  const { loading, error, data } = useQuery(GET_NOTES);
  const [text, setText] = useState('');

  const [createNote] = useMutation(CREATE_NOTE, {
    update(cache, { data: { createNote } }) {
      const response: any = cache.readQuery({ query: GET_NOTES })
        ? cache.readQuery({ query: GET_NOTES })
        : { notes: [] };

      const newNotes =
        response !== undefined ? [...response.notes, createNote] : [createNote];
      const notes = [...newNotes];

      cache.writeQuery({
        query: GET_NOTES,
        data: { notes },
      });
    },
  });

  return (
    <div className="container m-t-20">
      <h1 className="page-text">New Note</h1>

      <div className="newnote-page m-t-20">
        <form
          onSubmit={(e) => {
            e.preventDefault();

            createNote({
              variables: {
                text,
              },
            });
            history.push('/');
          }}
        >
          <div className="field">
            <label className="label">Note Text</label>
            <div className="control">
              <input
                className="input"
                name="text"
                type="text"
                placeholder="Note Title"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button className="button is-link">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
});

export default CreateNote;
