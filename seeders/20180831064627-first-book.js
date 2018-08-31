

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Books', [{
    title: 'Cartero',
    author: 'Charles Bukowski',
    content: 'Esta hilarante e increíble sátira destinada a convertirse en un clásico...',
    createdAt: new Date(),
    updatedAt: new Date(),
  }], {}),

  down: () => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  },
};
