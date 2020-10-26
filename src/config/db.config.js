module.exports = {
  URI: process.env.CLEARDB_DATABASE_URL,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
