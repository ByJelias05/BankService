'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable('Accounts', {
      id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId: {
          type: Sequelize.INTEGER,
            field: 'userId',
            references: {
                model: 'Users',
                key: 'id'
            }
        },
        balance: {
            type: Sequelize.DECIMAL(10, 2),
            allowNull: false
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
        }
    })
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('Accounts');
  }
};
