const db = require('../models/query');

module.exports = {
    get: async(req,res) => {
        const data= await db.getData();
        res.json(data);
    },
    insertUser: async(req,res) => {
        const username = req.body.username;
        const password = req.body.password;

        await db.insertData(username,password);
        res.redirect('http://localhost:5173');
    }
}