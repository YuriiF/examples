import { gql } from 'apollo-server';

const typeDefs = gql`
  # Our schema will come here
  type Launch {
    # An exclamation point (!) after a declared field's type means "this field's value can never be null."
    id: ID!
    site: String
    mission: Mission
    rocket: Rocket
    isBooked: Boolean!
  }

  type Rocket {
    id: ID!
    name: String
    type: String
  }

  type User {
    id: ID!
    email: String!
    trips: [Launch]!
  }

  type Mission {
    name: String
    missionPatch(size: PatchSize): String
  }

  enum PatchSize {
    SMALL
    LARGE
  }
  # If a declared field's type is in [Square Brackets], it's an
  # array of the specified type. If an array has an exclamation
  # point after it, the array cannot be null, but it can be empty

  # Query type definition
  type Query {
    launches: [Launch]!
    launch(id: ID!): Launch
    me: User
  }

  # Mutation type definition
  type Mutation {
    bokTrips(launchIds: [ID]!): TripUpdateResponse!
    cancelTrip(launchId: ID!): TripUpdateResponse!
    login(email: String): String # This is login token
  }

  type TripUpdateResponse {
    success: Boolean!
    message: String
    launches: [Launch]
  }
`;

export default typeDefs;
