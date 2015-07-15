/**
 * Created by TonyTed on 15/7/13.
 */


define(['zepto'], function (a) {
    console.log(a('.nice-ele'));
    a('.nice-ele').css('background', 'green');

    return {
        name:'demo.js',
        operator:'guoted'
    };
})