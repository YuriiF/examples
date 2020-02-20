import React, { useState, Fragment } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { Pane, Heading, Card, Textarea, Button, toaster, Position } from 'evergreen-ui';

/** Custom Imports */
import { StyledForm } from '../../containers/EditNote/EditNote';
import { GET_NOTES } from '@notes/graphql/queries';
import { CREATE_NOTE } from '@notes/graphql/mutations';

export const CreateNote = withRouter(({ history }) => {
  const { loading, error, data } = useQuery(GET_NOTES);
  const [text, setText] = useState('');

  const [createNote, { error: mutationError }] = useMutation(CREATE_NOTE, {
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

    if (mutationError) {
      toaster.danger('Create Note oparation failed', {
        description: `Refresh the page and try again.`,
        duration: 3,
      });
    } else {
      toaster.success('Note created', {
        description: `Your note was saved successfully.`,
        duration: 3,
      });
    }

    history.push('/');
  };

  return (
    <Fragment>
      <Pane zIndex={1} flexShrink={0} elevation={0} backgroundColor="white">
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
              <Pane display="flex" flexDirection="column">
                <Button type="submit" marginLeft="10px" intent="success">
                  Submit
                </Button>
                <Button
                  is={Link}
                  to="/"
                  intent="warning"
                  marginLeft="10px"
                  marginTop="8px"
                >
                  Cancel
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
