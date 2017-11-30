console.log('interview is running');
var plusOne = function(){
  var a = 1;
  return function(x){
    return x + 1;
  }
};
var run = plusOne();
console.log(run(50));
