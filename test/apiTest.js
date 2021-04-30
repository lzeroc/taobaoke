var TopClient = require('../lib/taobao/api/topClient.js').TopClient;

var client = new TopClient({
	'appkey': '',
	'appsecret': '',
	'REST_URL': 'http://gw.api.taobao.com/router/rest'
});

// client.execute('taobao.time.get', {
// }, function (error, response) {
//     if (!error) console.log(response);
//     else console.log(error);
// })


// client.execute('taobao.trade.fullinfo.get', {
//     'fields': 'tid,type,status,payment,orders,promotion_details',
//     'tid': '123456789'
// }, function (error, response) {
//     if (!error) console.log(response);
//     else console.log(error);
// })

// client.execute('alibaba.icbu.diagnostic.search.rank.get', {
//     'keyword': 'mp3',
//     'clientip': '39.128.159.170',
//     'session': '123'
// }, function (error, response) {
//     if (!error) console.log(response);
//     else console.log(error);
// })

// 物料精选
// https://market.m.taobao.com/app/qn/toutiao-new/index-pc.html#/detail/10628875?_k=gpov9a
// client.execute('taobao.tbk.dg.optimus.material', {
// 	'page_size': '20',
// 	'adzone_id': '111058150155',
// 	'page_no': '1',
// 	'material_id': '1'
// }, function (error, response) {
// 	if (!error) console.log(response.result_list);
// 	else console.log(error);
// })

// 物料搜索
// client.execute('taobao.tbk.dg.material.optional', {
// 	'page_size':'20',
// 	'page_no':'1',
// 	'q':'杯',
// 	'adzone_id':'111058150155',
// }, function(error, response) {
// 	if (!error) console.log(response.result_list.map_data);
// 	else console.log(error);
// })

// client.execute('taobao.ju.items.search', {
// 	// 'param_top_item_query': {}
// }, function(error, response) {
// 	if (!error) console.log(response);
// 	else console.log(error);
// })

// client.execute('api.taobao.get.taobao.cate', {
// }, function (error, response) {
//     if (!error) console.log(response);
//     else console.log(error);
// })

// client.execute('taobao.tbk.item.convert', {
//     'fields':'num_iid,click_url',
//     'num_iids':'123,456',
//     'adzone_id':'123',
//     'platform':'123',
//     'unid':'demo',
//     'dx':'1'
// }, function(error, response) {
//     if (!error) console.log(response);
//     else console.log(error);
// })

// client.execute('taobao.tbk.item.info.get', {
//     'num_iids':'123',
//     // 'platform':'1',
//     // 'ip':'11.22.33.43'
// }, function(error, response) {
//     if (!error) console.log(response);
//     else console.log(error);
// })

// client.execute('taobao.tbk.tpwd.create', {
// 	'text':'测试',
// 	'url': `https://uland.taobao.com/coupon/edetail?e=EAf92xnVLVENfLV8niU
// 	3RxrSI%2FOabn6qNg4Gqf8CT4AQpTzT6PCK1jbQJ6vPWYImmMHpNfYdHdCzsVjN4LSmKFPrAT6SCWS7f
// 	K6kR07aK9AXEoL%2BaCEeweLdX6XitnQoJDpMYKMkEvFAjTIF2f5c%2BB7aqfE3ZNYxE6o754lc51Gl%
// 	2BaS1qLD19BRejvUk6PEIvB81xIIevPUJP8D1%2BglCLSUzVkkdwsIm&&app_pvid=59590_11.8.106
// 	.205_973_1607851893707&ptl=floorId:2836;app_pvid:59590_11.8.106.205_973_16078518
// 	93707;tpp_pvid:100_11.182.55.18_8455_7691607851893712854&xId=6A6sAyzIFc6pHVePLa8
// 	14wNF0mKZjXk5qwGN7Q3Wop2TVyQ7z0YWCzGJoVjjfmVc9YwtIQgIwfvz4XjIxsgvKcNETgjZc9wUbxL
// 	ZSOHCmnDi&union_lens=lensId%3AMAPI%401607851893%400b086acd_c7fe_1765b70e415_471c
// 	%4001`,
// }, function(error, response) {
// 	if (!error) console.log(response.data.password_simple);
// 	else console.log(error);
// })