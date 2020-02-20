import React, { useState, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Pane, Heading, Paragraph, Card, Textarea, Button } from 'evergreen-ui';
import { StyledForm } from '../../containers/EditNote/EditNote';

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

  const handleFormSubmit = (e) => {
    e.preventDefault();

    createNote({
      variables: {
        text,
      },
    });
    history.push('/');
  };

  return (
    <Fragment>
      <Pane zIndex={1} flexShrink={0} elevation={1} backgroundColor="white">
        <Pane padding={16}>
          <Heading size={600}>Create Note</Heading>
        </Pane>
      </Pane>
      <Pane flex="1" flexDirection="column" background="tint1" padding={16}>
        <Card
          backgroundColor="white"
          elevation={0}
          height={240}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StyledForm onSubmit={(e) => handleFormSubmit(e)}>
            <Pane
              display="flex"
              padding={16}
              background="tint2"
              borderRadius={3}
              border="default"
            >
              <Pane flex={1} alignItems="center" display="flex">
                <Textarea
                  id="textarea-note"
                  name="content"
                  defaultValue={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Note text ..."
                  required
                />
              </Pane>
              <Pane>
                <Button type="submit" marginLeft="10px">
                  Submit
                </Button>
              </Pane>
            </Pane>
          </StyledForm>
        </Card>
      </Pane>
    </Fragment>
  );
});

export default CreateNote;
