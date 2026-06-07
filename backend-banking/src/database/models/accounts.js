const {DataTypes} = require('sequelize');

module.exports = (sequelize) =>{
    const Account = sequelize.define('Accounts', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId: {
            field: 'userId',
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'id'
            }
        },
        balance: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE
        }
    });


    return Account;
}

