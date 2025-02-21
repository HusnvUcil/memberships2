const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Membership = sequelize.define('Membership', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    unique_key: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
    },
    expired_time: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    expired_status: {
        type: DataTypes.ENUM('ACTIVE', 'EXPIRED'),
        allowNull: false
    },
    tiktok_account_type: {
        type: DataTypes.ENUM('SINGLE', 'MULTI', 'CUSTOM'),
        allowNull: false
    },
    tiktok_account: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    game_list: {
        type: DataTypes.TEXT('long'),
        allowNull: true
    },
    is_update_app: {
        type: DataTypes.ENUM('TRUE', 'FALSE'),
        allowNull: true,
        defaultValue: 'FALSE'
    }
}, {
    tableName: 'memberships',
    timestamps: false
});

module.exports = Membership;
