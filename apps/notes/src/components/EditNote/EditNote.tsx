import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { notify } from 'react-notify-toast';
import { Button, Pane, Textarea, Label } from 'evergreen-ui';
import gql from 'graphql-tag';

const NOTE_QUERY = gql`
  query getNote($_id: ID!) {
    note(_id: $_id) {
      _id
      text
    }
  }
`;

const UPDATE_NOTE = gql`
  mutation updateNote($_id: ID!, $text: String) {
    updateNote(_id: $_id, input: { text: $text }) {
      _id
      text
    }
  }
`;

export const EditNote = ({ match }) => {
  const [text, setTitle] = useState('');
  const [content, setContent] = useState('');

  const { loading, error, data } = useQuery(NOTE_QUERY, {
    variables: {
      _id: match.params.id,
    },
  });

  const [updateNote] = useMutation(UPDATE_NOTE);

  if (loading) return <div>Fetching note</div>;
  if (error) return <div>Error fetching note</div>;

  // set the  result gotten from rhe GraphQL server into the note variable.
  const note = data;

  return (
    <div className="container m-t-20">
      <h1 className="page-title">Edit Note</h1>

      <div className="newnote-page m-t-20">
        <form
          onSubmit={(e) => {
            // Stop the form from submitting
            e.preventDefault();

            // set the title of the note to the title in the state, if not's available set to the original title gotten from the GraphQL server
            // set the content of the note to the content in the state, if not's available set to the original content gotten from the GraphQL server
            // pass the id, title and content as variables to the UPDATE_NOTE mutation.
            updateNote({
              variables: {
                _id: note.note._id,
                text: text ? text : note.note.text,
              },
            });

            notify.show('Note was edited successfully', 'success');
          }}
        >
          <div className="field">
            <div className="control">
              <input
                className="input"
                type="text"
                name="text"
                placeholder="Note text"
                defaultValue={note.note.text}
                onChange={(e) => setTitle(e.target.value)}
                required
                hidden
              />
            </div>
          </div>

          <Pane
            display="flex"
            padding={16}
            background="tint2"
            borderRadius={3}
            border="default"
          >
            <Pane flex={1} alignItems="center" display="flex">
            <Label paddingRight="16px">Note </Label>
              <Textarea
                id="textarea-note"
                name="content"
                defaultValue={note.note.text}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Note Content here..."
                required
              />
            </Pane>
            <Pane>
              <Button is="a" marginLeft="10px">
                Submit
              </Button>
            </Pane>
          </Pane>
        </form>
      </div>
    </div>
  );
};

export default EditNote;
