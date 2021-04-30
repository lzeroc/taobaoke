var express = require('express');
var router = express.Router();
const TopClient = require('../lib/taobao/api/topClient.js').TopClient;

const adzoneId = '';

const client = new TopClient({
    'appkey': '',
    'appsecret': '',
    'REST_URL': 'http://gw.api.taobao.com/router/rest'
});

router.post('/category', function (req, res) {
    client.execute('taobao.tbk.dg.optimus.material', {
        'page_size': req.body.pageSize, // 页大小，默认20，1~100
        'adzone_id': adzoneId,
        'page_no': req.body.page,
        'material_id': req.body.materialId,
    }, function (error, response) {
        if (!error) {
            res.send({
                code: 200,
                data: response.result_list.map_data
            });
        } else {
            res.send(error);
        }
    })
});

router.post('/search', function (req, res) {
    client.execute('taobao.tbk.dg.material.optional', {
        // 'start_dsr': 10, // 店铺dsr评分 0-50000之间
        // platform: '1', // 链接形式：1：PC，2：无线，默认：１
        // end_tk_rate: 1234, // 淘客佣金比率上限 1234表示12.34%
        // start_tk_rate: 1234, // 淘客佣金比率下限 1234表示12.34%
        'is_overseas': false, // 是否海外
        'is_tmall': false, // 是否天猫 false不限制
        'sort': 'tk_rate',// 排序_des降序，排序_asc升序，销量total_sales，淘客佣金比率tk_rate， 累计推广量tk_total_sales，总支出佣金tk_total_commi，价格price
        'has_coupon': true, // 是否有优惠券
        // 'special_id': 111, // 会员运营ID
        // 'relation_id': 111, // 渠道关系ID，仅适用于渠道推广场景
        'page_size': req.body.pageSize, // 默认20，1~100
        'page_no': req.body.page, // 第几页 默认：１
        'q': req.body.search,
        'adzone_id': adzoneId,
    }, function (error, response) {
        if (!error) {
            res.send({
                code: 200,
                data: response.result_list.map_data
            });
        } else {
            res.send(error);
        }
    })
});

router.post('/tpwdCreate', function (req, res) {
    client.execute('taobao.tbk.tpwd.create', {
        'text': '名字',
        'url': req.body.url,
    }, function (error, response) {
        if (!error) {
            res.send({
                code: 200,
                data: response.data.password_simple
            });
        } else {
            res.send(error);
        }
    })
});

module.exports = router;
