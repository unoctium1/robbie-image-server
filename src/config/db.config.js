module.exports = {
  URI: (process.env.CLEARDB_DATABASE_URL) ? process.env.CLEARDB_DATABASE_URL : 'mysql://root:123456@localhost:3306/testdb',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
