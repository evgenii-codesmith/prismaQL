const { prisma } = require('./generated/prisma-client')

// A `main` function so that we can use async/await
async function main() {

  // // Create a new user with a new post
  // const newUser = await prisma
  //   .createUser({
  //     name: "Chris",
  //     email: "chris@prisma.io",
  //     trips: {
  //       create: [{
  //         country: "US",
  //       }, {
  //         country: "Italy",
  //       }]
  //     },
  //   })
  // console.log(`Created new user: ${newUser.name} (ID: ${newUser.id})`)

  // Read all users from the database and print them to the console
  const allUsers = await prisma.users()
  console.log('users: ', allUsers)
  
  // List all trips from DB
  const allTrips = await prisma.trips()
  console.log('trips: ', allTrips)

  // Read the previously created user from the database and print their posts to the console
  const tripsByUser = await prisma
    .user({ email: "chris@prisma.io" })
    .trips()
  console.log(`All trips by that user: ${JSON.stringify(tripsByUser)}`)
}
main().catch(e => console.error(e))

// const { prisma } = require('./generated/prisma-client')

// // A `main` function so that we can use async/await
// async function main() {

//   // Create a new user called `Alice`
//   const newUser = await prisma.createUser({ name: 'Alice' })
//   console.log(`Created new user: ${newUser.name} (ID: ${newUser.id})`)

//   // Read all users from the database and print them to the console
//   const allUsers = await prisma.users()
//   console.log(allUsers)
  
//   // Get user by ID
//   const user = await prisma
//   .user({ id: 'cjr16qo95000j0a20k9tsluum' })
//   console.log('user: ', user);

//   //Get user by name
//   const usersCalledAlice = await prisma
//   .users({
//     where: {
//       name: 'Alice'
//     }
//   })
//   console.log('Alice:', usersCalledAlice);

//   // Chaneg user name
//   const updatedUser = await prisma
//   .updateUser({
//     where: { id: 'cjr16qo95000j0a20k9tsluum' },
//     data: { name: 'Bob' }
//   })
  
//   // Delete userby ID
//   // const deletedUser = await prisma
//   // .deleteUser({ id: '__USER_ID__' })
// }

// main().catch(e => console.error(e))