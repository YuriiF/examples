import gql from 'graphql-tag';

const UPDATE_NOTE = gql`
  mutation updateNote($_id: ID!, $text: String) {
    updateNote(_id: $_id, text: $text) {
      _id
      text
    }
  }
`;

export { UPDATE_NOTE };
