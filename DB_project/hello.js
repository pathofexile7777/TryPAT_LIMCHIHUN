// require(): node.js에서 모듈을 불러오기 위해 사용하는 함수
var http = require('http');

// function(req, res) 익명함수를 통해 createServer API를 실행
// res.writeHead: request에 response header(응답 헤더)를 전송
//  응답 헤더: 특정 페이지에 정보를 요청하고 난 후 페이지로부터 돌아오는 정보
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('database project\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');