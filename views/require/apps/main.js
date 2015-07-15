/**
 * Created by TonyTed on 15/7/13.
 * main.js
 */
require.config({
    baseUrl:'./',
    paths:{
        'demo': 'js/demo',
        'zepto': 'http://libs.baidu.com/zepto/0.8/zepto.min',
        'underscore':'../../libs/underscore'
    },
    shim:{
        'zepto':{
            exports:'$'
        }
    }
})


require(['demo', 'underscore'], function (a, c) {
    console.log(a);
    console.log($('.nice-ele'));
    _.each([1,2], alert);
})