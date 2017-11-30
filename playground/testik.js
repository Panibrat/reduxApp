
console.log( Math.max.apply(null, [1,2,46,5]));


var bind = function myFunc() {
  var that = this;
  return  (that) => Math.max.apply(that, [1,2,46,5]);
}


const prA = a();
const prB = b();
const prC = c();

console.log(a().then(b()).then(c())); a().then(b()).then(c())

//////
Promise.all[a(), b(), c()];


a().then((res) => console.log(res));
////



function a() {
return fetch(‘/api/, (err,res)=> {

})
}

SOLID

“1+2”

;
1;2;3;4
+

;1;2;3;4+;

var str = fs.readFile('./txx.js');

1 read filter
2 parsing
3 get actions
4 returm result


it('retturn 3', ()=>{

  var type = '+';
  var arr = [1,2];
  var res = ourFunc(arr, type);

  expect(res).toBe(3)
})
