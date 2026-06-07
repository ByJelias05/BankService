'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Accounts', [
      {
        userId: 9,
        balance: 1000.00,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Accounts', 2, {});
  }
};
