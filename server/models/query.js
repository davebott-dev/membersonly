const pool = require('./pool');

exports.insertData = async(username,password) => {
    await pool.query(
        `
        INSERT INTO users(username,password)
        VALUES ($1, $2)
        `,[username,password]
    );
}
exports.getData = async () => {
    const { rows } = await pool.query("SELECT * FROM users;");
    return rows;
  };