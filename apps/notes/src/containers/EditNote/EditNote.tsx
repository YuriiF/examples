import React, { Fragment, useState } from 'react';
import {
  SideSheet,
  Pane,
  Heading,
  Paragraph,
  Card,
  Button,
  Textarea,
  toaster,
  Spinner,
} from 'evergreen-ui';
import styled from '@emotion/styled';

/** Custom Imports */
import { GET_NOTE } from '../../graphql/queries/queries';
import { UPDATE_NOTE } from '../../graphql/mutations/mutations';
import { useMutation, useQuery } from '@apollo/react-hooks';

export const StyledForm = styled.form`
  width: 100%;
`;

export const Loading = styled.div`
  margin: 'auto';
`;

export interface EditNoteProps {
  isShown?: boolean;
  setShown?: any;
  id?: any;
}

export const EditNote = ({ isShown, setShown, id }: EditNoteProps) => {
  const [text, setText] = useState('');
  const { loading, error, data } = useQuery(GET_NOTE, {
    variables: {
      _id: id,
    },
  });

  const [updateNote, { error: mutationError }] = useMutation(UPDATE_NOTE);

  if (loading) {
    return (
      <Loading>
        <Spinner>Fetching note</Spinner>
      </Loading>
    );
  }

  if (error) {
    return <div>Error fetching note: {error}</div>;
  }

  const { note } = data;

  const handleNoteSubmit = (e) => {
    updateNote({
      variables: {
        _id: id,
        text: text ? text : note.text,
      },
    });

    if (mutationError) {
      toaster.danger('Edit note oparation failed', {
        description: 'Refresh the page and try again.',
        duration: 3,
      });
    } else {
      toaster.success('Note edited successfully', {
        description: 'Your note was updated and save successfully.',
        duration: 3,
      });
    }

    /** Prevent Form to be sent */
    e.preventDefault();
  };

  return (
    <Fragment>
      <SideSheet
        isShown={isShown}
        onCloseComplete={() => setShown(false)}
        containerProps={{
          display: 'flex',
          flex: '1',
          flexDirection: 'column',
        }}
      >
        <Pane zIndex={1} flexShrink={0} elevation={0} backgroundColor="white">
          <Pane padding={16}>
            <Heading size={600}>Edit</Heading>
            <Paragraph size={400}>Edit Your Note</Paragraph>
          </Pane>
        </Pane>
        <Pane
          flex="1"
          flexDirection="column"
          // overflowY="scroll"
          background="tint1"
          padding={16}
        >
          <Card
            backgroundColor="white"
            elevation={0}
            height={240}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StyledForm onSubmit={(e) => handleNoteSubmit(e)}>
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
                    defaultValue={note.text}
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
      </SideSheet>
      {/* <Button onClick={() => setShown(true)}>EditNote</Button> */}
    </Fragment>
  );
};

export default EditNote;
