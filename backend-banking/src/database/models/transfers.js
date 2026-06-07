const {DataTypes} = require('sequelize');

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = (sequeliz) => {
    const Transfer = sequelize.define('Transfers', {
        id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      fromAccountId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Accounts',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      toAccountId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Accounts',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      amount: {
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
    });

    return Transfer;
};