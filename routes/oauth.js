var express = require('express');
var request = require('request');
var router = express.Router();

var client_id = '';

router.get('/taobao', function (req, res, next) {
    var options = {
        'method': 'POST',
        'url': 'https://oauth.taobao.com/authorize?state=1212&view=web&response_type=token&client_id=' + client_id,
        'headers': {
            'Cookie': 't=370c85a28cbd89fe222a7a85cd6b5887; cookie2=1398229131d5ef5cfb951fa74581031d; _tb_token_=e8b8e17951136'
        }
    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
        res.send(response.body);
    });

});

module.exports = router;
