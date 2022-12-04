const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas','root', '10190207',{
    host:'localhost',
    dialect: 'mysql'
});

module.exports = connection;