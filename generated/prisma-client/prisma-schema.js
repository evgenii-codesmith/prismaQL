module.exports = {
        typeDefs: /* GraphQL */ `type AggregateTrip {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar Long

type Mutation {
  createTrip(data: TripCreateInput!): Trip!
  updateTrip(data: TripUpdateInput!, where: TripWhereUniqueInput!): Trip
  updateManyTrips(data: TripUpdateManyMutationInput!, where: TripWhereInput): BatchPayload!
  upsertTrip(where: TripWhereUniqueInput!, create: TripCreateInput!, update: TripUpdateInput!): Trip!
  deleteTrip(where: TripWhereUniqueInput!): Trip
  deleteManyTrips(where: TripWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  trip(where: TripWhereUniqueInput!): Trip
  trips(where: TripWhereInput, orderBy: TripOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Trip]!
  tripsConnection(where: TripWhereInput, orderBy: TripOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TripConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  trip(where: TripSubscriptionWhereInput): TripSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type Trip {
  id: ID!
  country: String!
  complete: Boolean!
  author: User
}

type TripConnection {
  pageInfo: PageInfo!
  edges: [TripEdge]!
  aggregate: AggregateTrip!
}

input TripCreateInput {
  country: String!
  complete: Boolean
  author: UserCreateOneWithoutTripsInput
}

input TripCreateManyWithoutAuthorInput {
  create: [TripCreateWithoutAuthorInput!]
  connect: [TripWhereUniqueInput!]
}

input TripCreateWithoutAuthorInput {
  country: String!
  complete: Boolean
}

type TripEdge {
  node: Trip!
  cursor: String!
}

enum TripOrderByInput {
  id_ASC
  id_DESC
  country_ASC
  country_DESC
  complete_ASC
  complete_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TripPreviousValues {
  id: ID!
  country: String!
  complete: Boolean!
}

input TripScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  country: String
  country_not: String
  country_in: [String!]
  country_not_in: [String!]
  country_lt: String
  country_lte: String
  country_gt: String
  country_gte: String
  country_contains: String
  country_not_contains: String
  country_starts_with: String
  country_not_starts_with: String
  country_ends_with: String
  country_not_ends_with: String
  complete: Boolean
  complete_not: Boolean
  AND: [TripScalarWhereInput!]
  OR: [TripScalarWhereInput!]
  NOT: [TripScalarWhereInput!]
}

type TripSubscriptionPayload {
  mutation: MutationType!
  node: Trip
  updatedFields: [String!]
  previousValues: TripPreviousValues
}

input TripSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TripWhereInput
  AND: [TripSubscriptionWhereInput!]
  OR: [TripSubscriptionWhereInput!]
  NOT: [TripSubscriptionWhereInput!]
}

input TripUpdateInput {
  country: String
  complete: Boolean
  author: UserUpdateOneWithoutTripsInput
}

input TripUpdateManyDataInput {
  country: String
  complete: Boolean
}

input TripUpdateManyMutationInput {
  country: String
  complete: Boolean
}

input TripUpdateManyWithoutAuthorInput {
  create: [TripCreateWithoutAuthorInput!]
  delete: [TripWhereUniqueInput!]
  connect: [TripWhereUniqueInput!]
  disconnect: [TripWhereUniqueInput!]
  update: [TripUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [TripUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [TripScalarWhereInput!]
  updateMany: [TripUpdateManyWithWhereNestedInput!]
}

input TripUpdateManyWithWhereNestedInput {
  where: TripScalarWhereInput!
  data: TripUpdateManyDataInput!
}

input TripUpdateWithoutAuthorDataInput {
  country: String
  complete: Boolean
}

input TripUpdateWithWhereUniqueWithoutAuthorInput {
  where: TripWhereUniqueInput!
  data: TripUpdateWithoutAuthorDataInput!
}

input TripUpsertWithWhereUniqueWithoutAuthorInput {
  where: TripWhereUniqueInput!
  update: TripUpdateWithoutAuthorDataInput!
  create: TripCreateWithoutAuthorInput!
}

input TripWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  country: String
  country_not: String
  country_in: [String!]
  country_not_in: [String!]
  country_lt: String
  country_lte: String
  country_gt: String
  country_gte: String
  country_contains: String
  country_not_contains: String
  country_starts_with: String
  country_not_starts_with: String
  country_ends_with: String
  country_not_ends_with: String
  complete: Boolean
  complete_not: Boolean
  author: UserWhereInput
  AND: [TripWhereInput!]
  OR: [TripWhereInput!]
  NOT: [TripWhereInput!]
}

input TripWhereUniqueInput {
  id: ID
}

type User {
  id: ID!
  email: String
  name: String!
  trips(where: TripWhereInput, orderBy: TripOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Trip!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String
  name: String!
  trips: TripCreateManyWithoutAuthorInput
}

input UserCreateOneWithoutTripsInput {
  create: UserCreateWithoutTripsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutTripsInput {
  email: String
  name: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String
  name: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  email: String
  name: String
  trips: TripUpdateManyWithoutAuthorInput
}

input UserUpdateManyMutationInput {
  email: String
  name: String
}

input UserUpdateOneWithoutTripsInput {
  create: UserCreateWithoutTripsInput
  update: UserUpdateWithoutTripsDataInput
  upsert: UserUpsertWithoutTripsInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutTripsDataInput {
  email: String
  name: String
}

input UserUpsertWithoutTripsInput {
  update: UserUpdateWithoutTripsDataInput!
  create: UserCreateWithoutTripsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  trips_every: TripWhereInput
  trips_some: TripWhereInput
  trips_none: TripWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    