import React from 'react';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';
import {
  Spinner,
  Pane,
  Text,
  Heading,
  Button,
  Popover,
  Menu,
  Position,
} from 'evergreen-ui';

const GET_NOTES = gql`
  query getNotes {
    notes {
      _id
      text
    }
  }
`;

const DELETE_NOTE_QUERY = gql`
  mutation deleteNote($_id: ID!) {
    deleteNote(_id: $_id) {
      _id
      text
    }
  }
`;

export const NotesList: any = () => {
  const { loading, error, data } = useQuery(GET_NOTES);
  const [deleteNote] = useMutation(DELETE_NOTE_QUERY, {

    update(cache, { data: { deleteNote } }) {
      const { notes } = cache.readQuery({ query: GET_NOTES });
      const newNotes = notes.filter((note) => note._id !== deleteNote._id);

      cache.writeQuery({
        query: GET_NOTES,
        data: { notes: newNotes },
      });
    },
  });

  if (loading)
    return (
      <Pane marginX="auto" marginY="auto">
        <Spinner />
      </Pane>
    );
  if (error) return `Error! ${error.message}`;

  return (
    <div className="container m-t-20">
      <h1 className="page-title">All Notes</h1>

      <div className="allnotes-page">
        <div className="columns is-multiline">
          <Pane clearfix>
            {data.notes.map((note) => (
              <div className="column is-one-third" key={note._id}>
                <Pane
                  elevation={1}
                  float="left"
                  width={200}
                  height={120}
                  margin={24}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  flexDirection="column"
                  background="lightgoldenrodyellow"
                >
                  <Text
                    size={300}
                    alignSelf="flex-start"
                    marginX="12px"
                    marginY="12px"
                  >
                    {note.text}
                  </Text>
                  {/* <Text size={300}>{note.content}</Text> */}

                  <Pane
                    flex="1 1 auto"
                    display="flex"
                    flexDirection="row"
                    alignItems="flex-end"
                    paddingBottom="10px"
                    justifyContent="left"
                  >
                    <Popover
                      position={Position.BOTTOM}
                      content={
                        <Menu>
                          <Menu.Group>
                            <Menu.Item
                              icon="edit"
                              to={`notes/${note._id}`}
                              is={Link}
                              textDecoration="none"
                              height={20}
                            >
                              Edit...
                            </Menu.Item>
                          </Menu.Group>
                          <Menu.Divider />
                          <Menu.Group>
                            <Menu.Item
                              icon="trash"
                              intent="danger"
                              onSelect={(e) => {
                                e.preventDefault();
                                deleteNote({ variables: { _id: note._id } });
                              }}
                              height={20}
                            >
                              Delete...
                            </Menu.Item>
                          </Menu.Group>
                        </Menu>
                      }
                    >
                      <Button height={20} marginRight={8}>
                        ...
                      </Button>
                    </Popover>
                  </Pane>
                </Pane>
              </div>
            ))}
          </Pane>
        </div>
      </div>
    </div>
  );
};

export default NotesList;
