//每次尝试将字符串转换为一个JavaScript值（包括布尔值（booleans），数字（numbers），对象（objects），数组（arrays）和空（null））。
//如果这样做不会改变值的表示，那么该值将转换为一个数字（number）。
//例如，“1E02”和“100.000”是等同于数字（数字值100），但将转换它们会改变他们的表示，所以他们被保留为字符串。字符串值“100”被转换为数字100。

//如果数据(data)属性是一个对象（以“{”开始）或数组（以'['开始），可以用jQuery.parseJSON 将其解析成字符串；
//它必须遵循有效的JSON的语法，包括带双引号的属性名称。如果该值不能解析为一个JavaScript值，它将被保留为字符串

define([
    './core',
    './core/access',
    "./data/var/dataPriv",
    "./data/var/dataUser"
], function( jQuery, access, dataPriv, dataUser ) {
    'use strict';
//  Implementation Summary
//  

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    rmultiDash = /[A-Z]/g;

function dataAttr( elem, key, data ){
    var name;
    if( data === undefined && elem.nodeType === 1 ){
            name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
            data = elem.getAttribute( name );
    }
}
});