const express = require('express');
const router = express.Router();

const sqlite3 = require('sqlite3');

// データベースオブジェクト取得
const db = new sqlite3.Database('mydb.sqlite3');

// GETアクセス処理
router.get('/',(req, res, next)=>{
    // データベースのシリアライズ
    db.serialize(()=>{
        // レコードをすべて取り出す
        db.all("select * from mydata", (err, rows)=>{
        // データベースのアクセス完了の処理
        if (!err) {
            var data = {
                title: 'hello',
                content: rows // 取得したレコードデータ
            };
            res.render('hello', data);
        }
    });
  });
});

module.exports = router;