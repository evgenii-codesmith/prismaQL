const { prisma } = require('./generated/prisma-client')
const { GraphQLServer } = require('graphql-yoga')

const resolvers = {
  Query: {
    completedTrips(root, args, context) {
      return context.prisma.trips({ where: { complete: true } })
    },
    trip(root, args, context) {
      return context.prisma.trip({ id: args.tripId })
    },
    tripsByUser(root, args, context) {
      return context.prisma.user({
        id: args.userId
      }).trips()
    }
  },
  Mutation: {
    createTrip(root, args, context) {
      return context.prisma.createTrip(
        {
          country: args.country,
          author: {
            connect: { id: args.userId }
          }
        },

      )
    },
    complete(root, args, context) {
      return context.prisma.updateTrip(
        {
          where: { id: args.tripId },
          data: { complete: true },
        },

      )
    },
    createUser(root, args, context) {
      return context.prisma.createUser(
        { name: args.name },
      )
    }
  },
  User: {
    trips(root, args, context) {
      return context.prisma.user({
        id: root.id
      }).trips()
    }
  },
  Trip: {
    author(root, args, context) {
      return context.prisma.trip({
        id: root.id
      }).author()
    }
  }
}

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers,
  context: {
    prisma
  },
})
server.start(() => console.log('Server is running on http://localhost:4000'))