var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('joinForm', {title: 'Join Form !'});
});

// 사용자 입력값을 JSON으로 출력
// post: html의 method. 
// https://expressjs.com/ko/guide/routing.html
router.post('/', function(req, res, next) {
  console.log('req.body : ' + req.body);

  // 여기서 오류가 생긴 것 같다.
  // https://haeguri.github.io/2018/12/30/compare-response-json-send-func/
  res.json(req.body);
})

module.exports = router;
