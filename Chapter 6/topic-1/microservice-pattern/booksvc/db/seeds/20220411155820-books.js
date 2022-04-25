'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', [
      {
        title: "Industrial Society And It's Future",
        authorId: 1,
        publisherId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Books', null, {});
  }
};
