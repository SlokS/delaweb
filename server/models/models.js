const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    name: {type: DataTypes.STRING},
    surname: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Country = sequelize.define('country', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
})

const UserCountry = sequelize.define('user_country', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

Country.belongsToMany(User, {through: UserCountry})
Country.belongsToMany(User,  {through: UserCountry})

module.exports = {
    User, 
    Country
}