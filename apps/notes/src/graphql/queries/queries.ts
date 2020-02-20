import gql from 'graphql-tag';

const GET_NOTE = gql`
  query getNote($_id: ID!) {
    note(_id: $_id) {
      _id
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

export { GET_NOTE, GET_NOTES };
