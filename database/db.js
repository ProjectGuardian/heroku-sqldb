const Sequelize = require('sequelize')
const db = {}
const sequelize = new Sequelize('sql12390558', 'sql12390558', 'y738q81ya2', {
  host: 'sql12.freemysqlhosting.net',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})
async function test(){
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  }
  test();

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
