const db = require('../models/query');
const bcrypt = require('bcryptjs');

module.exports = {
    get: async(req,res) => {
        const user = req.user;
        res.json(user);
    },
    insertUser: async(req,res,next) => {
        const username = req.body.username;
        const password = req.body.password;

        bcrypt.hash(password,10,async(err,hashedPassword)=> {
            if(err) {
                console.log(err);
            } else {
                try {
                    await db.insertData(username,hashedPassword);
                    res.redirect('http://localhost:5173');
                } catch(err) {
                    return next(err);
                }
            }
        })
       
    },
    logout: (req,res,next) => {
        req.logout((err)=> {
            if(err){
                return next(err);
            }
            res.redirect('http://localhost:5173');
        })
    },
    getMessages: async (req,res) => {
        const data = await db.getMessages();
        res.json(data);
    },
    postMessage: async (req,res) => {
        const message = req.body.comment;
        const date = new Date().toLocaleString("en-us", {
            weekday: "long",
            month:"short",
            day:"numeric",
            year:"numeric",
            hour12:true,
        });
        const userId = req.user.id;
        await db.insertMessage(message,date,userId);
        res.redirect('http://localhost:5173');
    },
    deletePost: async(req,res) => {
        const id = req.params.id;
        await db.deleteMessage(id);
        res.redirect('http://localhost:5173');
    }
}
