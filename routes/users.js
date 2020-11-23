const express = require('express');
const router = express.Router();
const db = require('../models/index');
/* GET users listing. */

//データベース内表示の処理
router.get('/', (req, res, next) => {
 db.User.findAll().then(usrs => {
   var data = {
     title: 'Users/Index',
     content: usrs
   }
   res.render('users/index',data);
 });
});

//データベースにアカウント作成の処理
router.get('/add', (req, res, next) => {
  var data = {
    title: 'Users/Add',
    form: new db.User(),
    err: null
  }
  res.render('users/add', data);
});

router.post('/add', (req, res, next) =>{
  const form = {
    name: req.body.name,
    pass: req.body.pass,
    mail: req.body.mail,
    age: req.body.age
  };
  db.sequelize.sync()
    .then(() => db.User.create(form)
    .then(usr => {
      res.redirect('/users')
    })
    .catch(err => {
      var data = {
        title: 'User/Add',
        form: form,
        err: err
      }
      res.render('users/add', data);
    })
    )
});

//ログイン時の処理
router.get('/login', (req, res,next) => {
  var data = {
    title: 'Users/Login',
    content: '名前とパスワードを入れてください。'
  }
  res.render('users/login', data);
});

router.post('/login', (req, res, next) => {
  db.User.findOne({
    where: {
      name: req.body.name,
      pass: req.body.pass
    }
  }).then(usr => {
    if (usr != null) {
      req.session.login = usr;
      let back = req.session.back;
      if (back == null) {
        back = '/boards';
      }
      res.redirect(back);
    } else {
      var data = {
        title: 'Users/Login',
        content: '名前またはパスワードが間違っています。再入力して下さい。'
      }
      res.render('users/login', data);
    }
  })
});

module.exports = router;
