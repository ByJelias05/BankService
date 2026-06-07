

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            id: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
            
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
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

    return User;
}