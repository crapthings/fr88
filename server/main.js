import '/both/global'

Meteor.publish('test', function () {
  return Test.find()
})

Meteor.startup(function () {
  Test.remove()
  if (Test.findOne()) return

  const test = _.times(5000, () => ({
    _id: Random.id(),
    title: faker.lorem.sentence(),
  }))

  Test.rawCollection().insertMany(test)
})
