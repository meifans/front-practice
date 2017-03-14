/**
 * Created by Administrator on 2016/11/14.
 */

function range(from,to) {
    var r = inherit(range.methods);
    r.from= from;
    r.to = to;
    return r;
}
range.methods = {
    include:function (x) {
        return this.from<=x&&x<=this.to;
    },
    foreach:function(f) {
        for(var x =Math.ceil(this.from);x<=this.to;x++) f(x);
    },
    toString : function () {
        return "(" + this.from + "..." + this.to + ")";
    }
};
function inherit(p) {
    if(p==null) throw TypeError();
    if(Object.create)
        return Object.create(p);
    var t = typeof p;
    if(t!=="object"&&t!=="function") throw TypeError();
    function f() {};
    f.prototype = p;
    return new f();
}
var r = range(1, 3);
r.include(2);
r.foreach(console.log);
console.log(r);

