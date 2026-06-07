'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert("Transfers", [
      {
        fromAccountId: 2,
        toAccountId: 5,
        amount: 100.00,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Transfers', null, {});
  }
};
