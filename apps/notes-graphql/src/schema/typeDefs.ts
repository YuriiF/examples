import { gql } from 'apollo-server';

const typeDefs = gql`
  # Our schema will come here
  scalar Date

  type Note {
    # An exclamation point (!) after a declared field's type means
    # "this field's value can never be null."
    _id: ID!
    text: String!
    userId: ID
    createdAt: Date
  }

  type User {
    _id: ID!
    avatar: String
    email: String!
    notes: [Note]
  }

  # If a declared field's type is in [Square Brackets], it's an
  # array of the specified type. If an array has an exclamation
  # point after it, the array cannot be null, but it can be empty

  """
  Simple wrapper around our list of notes that contains a cursor to the
  last item in the list. Pass this cursor to the notes query to fetch results
  after these.
  """
  type NoteConnection { # add this below the Query type as an additional type.
    cursor: String!
    hasMore: Boolean!
    notes: [Note]!
  }

  # Query type definition
  type Query {
    pagedNotes( # replace the current notes query with this one.
      """
      The number of results to show. Must be >= 1. Default = 20
      """
      pageSize: Int
      """
      If you add a cursor here, it will only return results _after_ this cursor
      """
      after: String
    ): NoteConnection!

    notes: [Note]
    note(_id: ID!): Note
    me: User
  }

  # Mutation type definition
  type Mutation {
    createNote(launchIds: [ID]!): NoteUpdateResponse!
    deleteNote(launchId: ID!): NoteUpdateResponse!
    updateNote(launchId: ID!): NoteUpdateResponse!
    login(email: String): String # This is login token
  }

  type NoteUpdateResponse {
    success: Boolean!
    message: String
    notes: [Note]
  }
`;

export default typeDefs;
