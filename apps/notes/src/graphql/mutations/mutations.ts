import gql from 'graphql-tag';

export const UPDATE_NOTE = gql`
  mutation updateNote($_id: ID!, $text: String) {
    updateNote(_id: $_id, text: $text) {
      _id
      text
    }
  }
`;

export const DELETE_NOTE_QUERY = gql`
  mutation deleteNote($_id: ID!) {
    deleteNote(_id: $_id) {
      _id
      text
    }
  }
`;

export const CREATE_NOTE = gql`
  mutation createNote($text: String!) {
    createNote(input: { text: $text }) {
      text
      _id
    }
  }
`;
