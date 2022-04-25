'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const publisherNames = ["Bale Pustaka", "FC"];
    await queryInterface.bulkInsert(
      'Publishers',
      publisherNames.map((name) => ({
        name,
        createdAt: new Date(),
        updatedAt: new Date()
      })),
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Publishers', null, {});
  }
};
