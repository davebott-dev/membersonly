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
exports.getMessages = async () => {
    const {rows} = await pool.query (
        `
        SELECT messages.*, users.username
        FROM messages
        LEFT JOIN users
        ON messages.user_id = users.id; 
        `);
    return rows;
}
exports.insertMessage = async (message,date,id) => {
    await pool.query(
        `
        INSERT INTO messages (message,date,user_id)
        VALUES ($1,$2,$3)
        `,[message,date,id]
    );
}
exports.deleteMessage = async (id) => {
    await pool.query(
        `
        DELETE FROM messages
        WHERE id = $1;
        `,[id]
    )
}