var express = require('express');
var router = express.Router();
var loginVerification = require('../util/loginVerification');
var session = require('express-session');
var formidable = require('formidable');

// router.use(cookie('tlxt'));
router.use(session({
    secret: "keyboard cat", // 加密密钥
    resave: true,  // 强制保存session
    saveUninitialized: true,
    cookie: ('userName', '',{
        maxAge:  2*60*1000,
        secure: false,
        rolling: true
    })
}));


/* GET home page. */
router.get('/', function(req, res, next) {
    // res.render('index', { title: 'Express' });
    if (req.session.userinfo){
        console.log();
        res.send(req.session.userinfo);
        
    } else {
        res.send('重新登陆');
    }
});


router.post('/', loginVerification);

module.exports = router;
