'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const authorNames = ["John Doe", "Ted Kaczynski"];
    await queryInterface.bulkInsert(
      'Authors',
      authorNames.map((name) => ({
        name,
        createdAt: new Date(),
        updatedAt: new Date()
      })),
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Authors', null, {});
  }
};
