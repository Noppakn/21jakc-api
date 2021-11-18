const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// ==> Conexão com a Base de Dados:
const pool = new Pool({
  user: 'Admin21@21jack-database',
  password: '@minLnwza',
  host: '21jack-database.postgres.database.azure.com',
  database: '21jack',
  port: 5432
});

const query = async (sql, values) => {
  try {
      const res = await pool.query(sql, values)
      return res.rows.length > 0 ? res.rows : false
  } catch (e) {
      console.error('[ERROR][SQL]' + e.stack + '(' + sql + ')')
      return false
  }
}

const queryFindOneOrNull = async (sql, values) => {
  try {
      const res = await pool.query(sql, values)
      return res.rows.length > 0 ? res.rows[0] : false
  } catch (e) {
      console.error('[ERROR][SQL]' + e.stack + '(' + sql + ')')
      return false
  }
}

module.exports = {
  query,
  queryFindOneOrNull
}