const express = require('express');
const router = express.Router();
const controller = require('../controllers/apiController');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const pool = require('../models/pool');
const bcrypt = require('bcryptjs');

passport.use(
    new LocalStrategy(async (username,password, done)=> {
        try {
            const {rows} = await pool.query(
                "SELECT * FROM users WHERE username = $1",
                [username]
            );
            const user = rows[0];

            if(!user) {
                return done(null, false, {message:'incorrect username'});
            }
            const match  = await bcrypt.compare(password,user.password);
            if(!match) {
                return done(null,false,{message:'incorrect password'});
            }

            return done(null,user);
        
        }catch (err) {
            return done(err);
        }
    })
)
passport.serializeUser((user,done)=> {
    done(null,user.id);
});
passport.deserializeUser(async(id,done)=> {
    try{
        const {rows} = await pool.query("SELECT * FROM users WHERE id = $1",
            [id]
        )
        const user = rows[0];
        done(null,user);
    } catch(err) {
        done(err);
    }
})

router.use(
    session({secret:'randomsecret',resave:false,saveUninitialized:false})
);
router.use(passport.session());

router.get('/',controller.get);
router.post('/',controller.insertUser);
router.get('/messages',controller.getMessages);
router.post('/messages',controller.postMessage);
router.post('/delete/:id',controller.deletePost);
router.post(
    '/user/log-in',
    passport.authenticate("local", {
        successRedirect: 'http://localhost:5173/',
        failureRedirect: 'http://localhost:5173/Sign-up'
    })
)
router.get('/logout', controller.logout);
module.exports = router;