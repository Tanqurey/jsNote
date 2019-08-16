/*
讲解作用域链的延长

try-catch语句和with语句可延长作用域链

catch语句创建一个新的变量对象，包含被抛出的错误对象的声明

with语句起到引用对象，并对该对象上的属性进行操作，其作用是可以省略重复书写该对象名称，起到简化书写的作用

with代码块中，javascript引擎对变量的处理方式是：先查找是不是该对象的已经存在属性，如果是，则停止。如果不是继续查找是不是局部变量。

注意，下面代码块中，href由于是o的属性，所以with将不会继续向上查找，直接重写对象的相关属性。否则，with将重写相应的局部变量
*/
var o={href:"sssss"};  
var href="1111";  
function buildUrl(){  
     var qs="?debug=true";       
     with(o){  
          href="2222";  
          var url=href+qs;  
     }      
     return url;  
}  
var result=buildUrl();  
console.log(result);  
console.log(href); 