// function displayInfo(args){
//     var output = '';
//     if(typeof args.name == 'string') {
//         output += "Name:"+args.name+"\n";
//     }
//     if(typeof args.age == 'number') {
//         output += "Age:"+args.age+"\n";
//     }
//     console.log(output);
// }

// displayInfo({
//     name: 'Nichilas',
//     age: 29
// });
// displayInfo({
//     name: "Greg"
// });


// var colors = ['red', 'blue', 'green'];
// console.log(colors.toString());
// console.log(colors.valueOf());
// console.log(colors);

// var person1 = {
//     toLocaleString : function () {
//         return "Nikolaos";
//     },
//     toString : function() {
//         return "Nicholas";
//     }
// };
// var person2 = {
//     toLocaleString : function () {
//         return "Grigorios";
//     },
//     toString : function(){
//         return "Greg";
//     }
// };

// var people = [person1, person2];
// console.log(people);
// console.log(people.toString());
// console.log(people.toLocaleString());

// var colors = ['red', 'green', 'blue'];
// console.log(colors);
// console.log(colors.join(','));
// console.log(colors.join('||'));

// var colors = new Array();
// var count = colors.push('red', 'green');
// console.log(colors);
// count = colors.push('black');
// console.log(colors);
// var item = colors.pop();
// console.log(item);
// console.log(colors);
// var items = colors.shift();
// console.log(items);
// console.log(colors);

// function compare(value1, value2){
//     if(value1 < value2){
//         return 1;
//     }else if(value1 > value2){
//         return -1;
//     }else {
//         return 0;
//     }
// }

// var values = [0, 1, 5, 10, 15];
// values.sort(compare);
// console.log(values);

// (function(){
//     return typeof arguments;
// })();
// var a = NaN;
// console.log(a!=NaN);

// function point(x, y){
//     if(typeof x === 'undefined'){
//         x=320;
//     }
//     if(typeof y === 'undefined'){
//         y=240;
//     }
//     return {x: x, y: y};
// }
// point(0,0);
// console.log(point());

// function toYMD(date){
//     var y = date.getYear() + 1900,
//         m = date.getMonth() + 1,
//         d = date.getDate();
//     return y
//         + '/' + (m < 10 ? '0' + m : m)
//         + '/' + (d < 10 ? '0' + d : d);
// }
// console.log((new Date()).getYear());

// function sandwichMaker(){
//     var magicIngredient = 'peanut butter';
//     function make(filling){
//         return magicIngredient + 'and' + filling;
//     }
//     return make;
// }
// var f = sandwichMaker();
// console.log(f('jelly'));

// function sandwichMaker(magicIngredient){
//     return function(filling){
//         return magicIngredient + ' and ' + filling;
//     };
// };
// var f = sandwichMaker('a');
// console.log(f('b'));

// function box(){
//     var val = undefined;
//     return{
//         set: function(newVal) { val = newVal;},
//         get: function() { return val;},
//         type: function() { return typeof val;}
//     };
// }
// var b = box();

// function warpElements(a){
//     var result = [];
//     for(var i =0, n=a.length; i<n; i++){
//         (function(){
//             var j = i;
//             result[i] = function(){
//                 return a[j];
//             };
//         })();
//     }
//     return result;
// }

var a = [
    '1',
    '2',
    '3',
    '1',
    '3'
];
var b = new Set(a);
console.log([...b].join('|'));
console.log([...b].toLocaleString());
//数组操作方法
//new Set()//去重
//join() 替换
//push() 逐个添加到数组末尾
//pop() 从数值末尾移除最后一项
//shift() 移除第一项并返回该项
//unshift() 能在数组前端添加任意个项并返回数组的长度----与pop()方法组合可以从相反的方向来模拟队列
//reverse() 重排序
//sort() 按升序排列
//concat() 合并数组
//slice() 截取数组
//splice()  删除，插入和替换数组
var colors = ['red', 'green', 'blue'];
var removed = colors.splice(0,1);//删除第一项
console.log(removed);//red 返回被删除的项
console.log(colors);
removed = colors.splice(1, 0, 'yellow', 'orange');//从位置1开始插入两项
console.log(colors);
console.log(removed);//返回一个空数组
removed =colors.splice(1, 1, 'red', 'purple');//插入两项，删除一项，相当于用两项替换一项
console.log(colors);
console.log(removed);
//数组位置方法 ---indexOf()和lastIndexOf()两种---接受2个参数（第一个为要查询的值，第二个位查询的开始位置）
//indexOf() 从数组开头（位置0）开始向后查找
//lastIndexOf() 从数组的末尾向前查找
var number = [1,3,4,5,4,5,6,7,8];
console.log(number.indexOf(3));//位置1处
console.log(number.indexOf(4,3));//查询4从开头的第3个位置开始查询
console.log(number.lastIndexOf(4));
console.log(number.lastIndexOf(4,3));//查询4从末尾倒数第3个位置开始查询

//迭代方法---共5个。每个方法都接受两个参数：要在每一项上运行的函数和（可选的）运行改函数的作用域对象---影响this的值。
//every()
//filter()
//forEach()
//map()
//some()
var numbers =  [1,2,3,4,5,4,3,2,1];
var everyResult = numbers.every(function(item, index, array){
    return (item > 2);
});
console.log(everyResult);//false
var someResult = numbers.some(function(item, index, array){
    return (item > 2);
});
console.log(someResult);//true
var filterResult = numbers.filter(function(item, index, array){
    return (item > 2);
});
console.log(filterResult);
var mapResult = numbers.map(function(item, index, array){
    return item * 2;
});
console.log(mapResult);

//缩小方法---共2个 reduce()和reduceRight()
//reduce() 从第一项开始
var values = [1,2,3,4,5];
var sum = values.reduce(function(prev, cur, index, array){
    return prev + cur;
});
console.log(sum);
//reduceRight() 与reduce()的方向相反，从最后一项开始
var sumRight = values.reduceRight(function(prev, cur, index, array){
    return prev + cur;
});
console.log(sumRight);


//Date 类型
var now = new Date();
console.log(now);
//Date.parse()
var someDate = new Date(Date.parse("May 25, 2004"));
console.log(now.valueOf());

//RegExp类型

//function 类型
function creatComparisonFunction(propertyName){
    return function(object1, object2){
        var value1 = object1[propertyName];
        var value2 = object2[propertyName];
        if(value1 < value2){
            return -1;
        }else if(value1 > value2){
            return 1;
        }else{
            return 0;
        }
    };
}
var data = [{name:"zanchary", age:28},{name:"Nicholas", age:29}];
data.sort(creatComparisonFunction('name'));
console.log(data[0].name);
//函数的名字仅仅是一个包含指针的变量

// function sum(num1, num2){
//     num1 + num2;
// }
// function callSum(num1, num2){
//     return sum.call(this, num1, num2);
// }

// console.log(callSum(10,10));

//apply() call() bind()

//charAt() charCodeAt()
var srtingValue = 'hello world';
console.log(srtingValue.charAt(1));
console.log(srtingValue.charCodeAt(1));
//作为值得函数
function callSomeFuction(someFuction, someArgument) {
    return someFuction(someArgument);
}
function add10(num) {
    return num + 10;
}
var result1 = callSomeFuction(add10, 10);
console.log(result1);
function getGreeting(name) {
    return "Hello, " + name;
}
var result2 = callSomeFuction(getGreeting, "Nicholas");
console.log(result2);

//对象属性排序
function createComparisonFunction(propertyName) {
    return function(object1, object2) {
        var value1 = object1[propertyName];
        var value2 = object2[propertyName];
        if (value1 < value2){
            return -1;
        }else if(value1 > value2){
            return 1;
        }else{
            return 0;
        }
    };
}

var data = [{name: "Zaachary", age: 28}, {name: "Nicholas", age: 29}];
data.sort(createComparisonFunction("name"));
console.log(data[0].name);
data.sort(createComparisonFunction("age"));
console.log(data[0].name);

//阶乘函数
//往上加的阶乘
var number = function(n) {
    if(n === 1){
        return 1;
    }else{
        product = 1;
        for (let i = 1; i < n; i++) {
            product *= i;
        }
        return product;
    }
}
var d = number(5);
console.log(d);
//往下减的阶乘
var del = function(n) {
    if(n <= 1){
        return 1;
    }else{
        return n * del(n - 1);
    }
}
var data = del(6);
console.log(data);
//arguments.callee 防止改动函数名
function factorial(num) {
    if(num <= 1){
        return 1;
    }else{
        return num * arguments.callee(num - 1);
    }
}
console.log(factorial(5));
var trueFactorial = factorial;
factorial = function() {
    return 0;
};
console.log(trueFactorial(5));
console.log(factorial(5));

function outer() {
    inner();
}
function inner() {
    console.log(inner.caller);
}
outer();

//取最大值
var values = [1, 2, 3, 4, 5, 6, 7, 8];
var max = Math.max.apply(Math, values);
console.log(max);
//舍入方法
// Math.ceil()向上舍入
// Math.floor()向下舍入
// Math.round() 四舍五入